import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className={styles["profile-main-loader"]}>
        <div className={styles.loader}>
          <svg className={styles["circular-loader"]} viewBox="25 25 50 50">
            <circle
              className={styles["loader-path"]}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#70c542"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Loader;
