import axios from 'axios'
const FetchData = async (answers) => {
  console.log("useEffect is running");
  try {
    const response = await axios.post(
      "https://klepio-backend-experimental.onrender.com/predict",
      answers
    );
    const prediction = response.data.prediction;
    console.log(prediction);
    if (prediction == undefined) {
      return("Something Went Wrong")
    } else {
      // navigate("/results", { state: { prediction: prediction } });
      return(prediction)
    }
  } catch (error) {
    console.error(error);
  }
};
export default FetchData;