const result = match (response) {
  // Matches an object with a status property of 200 and extracts the 'data'
  when ({ status: 200, data }) => handleSuccess(data),
  
  // Matches an object with a status property of 404
  when ({ status: 404 }) => handleNotFound(),
  
  // Guarded pattern: matches if the pattern fits AND the 'if' condition is true
  when ({ status }) if (status >= 400) => handleError(status),
  
  // Default case (matches anything not handled above)
  else => throw new Error("Unknown state")
};

