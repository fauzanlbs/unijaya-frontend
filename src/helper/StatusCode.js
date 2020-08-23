const StatusCode = (code) => {
  switch (code) {
    case 400:
      return "Bad request. This could be caused by various actions by the user, such as providing invalid JSON data in the request body, providing invalid action parameters, etc.";
    case 401:
      return "Authentication failed.";
    case 403:
      return "The authenticated user is not allowed to access the specified API endpoint.";
    case 404:
      return "The requested resource does not exist.";
    case 405:
      return "Method not allowed. Please check the Allow header for the allowed HTTP methods.";
    case 415:
      return "Unsupported media type. The requested content type or version number is invalid.";
    case 422:
      return "Data validation failed (in response to a POST request, for example). Please check the response body for detailed error messages.";
    case 429:
      return "Too many requests. The request was rejected due to rate limiting.";
    case 500:
      return "Internal server error. This could be caused by internal program errors.";
    default:
      return "OK";
  }
};

export default StatusCode;
