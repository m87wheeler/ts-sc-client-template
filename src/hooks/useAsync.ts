import * as React from "react";

type StatusType = "idle" | "pending" | "success" | "error";
type FunctionType = () => Promise<any>;

export const useAsync = (asyncFunction: FunctionType, immediate = true) => {
  const [status, setStatus] = React.useState<StatusType>("idle");
  const [value, setValue] = React.useState<any>(null);
  const [error, setError] = React.useState<string>("");

  const execute = React.useCallback(async () => {
    setStatus("pending");
    setValue(null);
    setError("");
    try {
      const response = await asyncFunction();
      setValue(response);
      setStatus("success");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
      setStatus("error");
    }
  }, [asyncFunction]);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, value, error };
};
