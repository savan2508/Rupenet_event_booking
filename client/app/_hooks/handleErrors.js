export const handleErrors = (errorMessages) => {
  if (errorMessages && errorMessages.length > 0) {
    return (
      <div className="alert alert-danger">
        <ul className="my-0">
          {errorMessages.map((err) => (
            <li key={`Error message + ${err.message}`}>{err.message}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};
