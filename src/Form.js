import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <Button
        buttonText="users"
        requestType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText="posts"
        requestType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText="comments"
        requestType={reqType}
        setReqType={setReqType}
      />
    </form>
  );
};

export default Form;
