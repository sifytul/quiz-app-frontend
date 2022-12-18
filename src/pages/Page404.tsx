type Props = {};

const PageNotFound = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1 style={{ borderRight: "1px solid grey", paddingRight: "2rem" }}>
        Error! 404
      </h1>
      <p>Page Not Found</p>
    </div>
  );
};

export default PageNotFound;
