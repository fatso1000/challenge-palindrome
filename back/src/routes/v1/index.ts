import { Router } from "express";
import Historical from "./historical/historical";

// import signup from "./access/signup";

const router = Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use("/", apikey);
/*-------------------------------------------------------------------------*/

router.use("/historical", Historical);

export default router;
