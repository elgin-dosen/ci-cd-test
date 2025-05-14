import React from "react";

const EnvWrapper = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Environment Variables Test</h3>
      <pre>
        {JSON.stringify(
          {
            apiUrl: process.env.REACT_APP_API_URL,
            environment: process.env.REACT_APP_ENVIRONMENT,
            // Add other non-sensitive variables
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
};

export default EnvWrapper;
