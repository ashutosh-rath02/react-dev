const RES_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

//restaurant card component
const Restaurantcard = (props) => {
  //const Rescard = ({resName,cuisins}) => {}
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    areaName,
    locality,
    avgRating,
  } = resData?.info;

  return (
    <div className="m-4 p-4 rounded-lg w-[250px] bg-[#f0f0f0]">
      <img src={RES_URL + cloudinaryImageId} className="rounded-lg" />
      <div className="flex flex-col">
        <h4 className="font-bold my-2 text-2xl">{name}</h4>
        <div className="flex flex-col gap-2">
          <p>{cuisines.join(", ")}</p>
          <div className="res-fex1">
            <p>{areaName + " " + locality}</p>
            <p className="p-2 mt-2 rounded-xl bg-green-500 w-min px-4">
              {avgRating}&#9733;
            </p>
          </div>
          <div className="res-fex1">
            <p>{costForTwo}</p>
            <p>{resData.info.sla.slaString}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Restaurantcard;
