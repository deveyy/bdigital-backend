/**
 * @author ddthien.dev
 * @date 2022-10-07
 * @contact
 * @email thiendinh.dev@gmail.com
 */

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message || err });
};

export  {errorHandler}