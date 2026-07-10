const express =require('express');
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

//importar conexion a DB
const { swaggerUi, swaggerSpec } = require("./docs/swagger");
const db = require("./config/conectionDB");
const app = express();
const PORT = process.env.PORT||3000;
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//importar rutas
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRouter");
const livestockRouter = require("./routes/livestockRouter");
const vaccinationRouter = require("./routes/vaccinationRouter");
const famachaRouter = require("./routes/famachaRouter");
const productionRouter = require("./routes/productionRouter"); 
const mastitisRouter = require("./routes/mastitisRouter");
const mortalityRouter = require("./routes/mortalityRouter");
const feedingRouter = require("./routes/feedingRouter");
const birthsRouter = require("./routes/birthsRouter");
const responsibleRouter = require("./routes/responsibleRouter");
const mountsRoute = require("./routes/mountsRoute");
const weigthRoute = require("./routes/weigthRoute")

const limiter = require("./middlewares/rateLimit");
const errorHandler = require("./middlewares/errorHandler");

app.use(limiter);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/livestock", livestockRouter);
app.use("/api/vaccination", vaccinationRouter);
app.use("/api/famacha", famachaRouter);
app.use("/api/production", productionRouter);
app.use("/api/mastitis", mastitisRouter);
app.use("/api/mortality", mortalityRouter);
app.use("/api/feeding", feedingRouter);
app.use("/api/births", birthsRouter);
app.use("/api/resposible", responsibleRouter);
app.use("/api/mounts", mountsRoute);
app.use("/api/weigth", weigthRoute)


app.use((req, res, next)=>{
    const error = new Error("Ruta no encontrada");
    error.status = 404;
    next(error);
});

app.use(errorHandler);

const init = async () => {
    try {
        await db.authenticate();
        console.log("Conexion a la base de datos establecida");
        app.listen(PORT, () => {
            console.log("App corriendo en el puerto " + PORT);
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
    }
};
init();