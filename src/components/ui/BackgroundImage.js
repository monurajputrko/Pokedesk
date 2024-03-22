import backgroundImage from "../../img/background.png";

function BackgroundImage({ children }) {
  return (
    <div
      className="min-h-screen w-full bg-contain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat-y",
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundImage;
