import { PropTypes } from "prop-types";

function BigCardCharacteristics({ abilities, height, image, weight }) {
  return (
    <div className=" container flex flex-col items-center justify-start xl:flex-row">
      <img src={image} alt="Pokemon" className="max-h-40 xl:max-h-64 "></img>

      <div className="p-0 xl:p-4 w-min h-min ">
        <div className=" h-full bg-white rounded-3xl flex-row justify-center xl:justify-start xl:flex ">
          <div className=" h-full w-36 xl:w-1/2 ">
            <div className=" h-1/2 flex flex-col justify-center p-0 xl:p-8 ">
              <p className="text-lg text-purpleTheme text-center xl:text-2xl">
                Weight:
              </p>
              <p className="text-lg text-darkYellowFontColor text-center xl:text-2xl">
                {weight}
              </p>
            </div>

            <div className=" h-1/2 flex flex-col justify-center p-0 xl:p-8 pt-0 ">
              <p className="text-lg text-purpleTheme  text-center xl:text-2xl">
                Height:
              </p>
              <p className="text-lg text-darkYellowFontColor  text-center xl:text-2xl">
                {height}
              </p>
            </div>
          </div>
          <div className=" h-full w-36 xl:w-1/2 p-0 xl:p-8 xl:pr-10 overflow-auto">
            <p className=" h-1/4 text-purpleTheme text-lg text-center mb-0 xl:mb-1 xl:text-2xl">
              Abilities:
            </p>
            <div className="flex flex-col justify-center">
              {abilities.map((ability, index) => (
                <p
                  key={index}
                  className="text-lg text-darkYellowFontColor xl:text-end text-center capitalize xl:text-2xl"
                >
                  {ability.ability.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BigCardCharacteristics.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};

export default BigCardCharacteristics;
