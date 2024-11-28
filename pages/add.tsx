import { useContext } from "react";
import Typography  from "@mui/material/Typography";
import Layout from "@/components/layout";
import CarForm from "@/components/forms/car_form";

import { CarsContext } from "@/components/contexts/car.context";


const Cars = () => {
  const { addCar } = useContext(CarsContext);
  return (
    <Layout>
      <Typography component="h1">Add a Car</Typography>
      <CarForm addCar={addCar} />
    </Layout>
  );
};

export default Cars;
