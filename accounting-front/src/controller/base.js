export const getAll = (Model) => async (req, res, next) => {
  try {
    const all = new All(Model.query(), req.query);

    const dc = await all.query;

    res.status(200).json(dc);
  } catch (error) {
    next(error);
  }
};

export const getOne = (Model) => async (req, res, next) => {
  const id = req.params.Id;

  if (!id || !Number(id)) {
    return res.status(400).json({
      status: "fail",
      statusCode: 400,
      message: "ID is missing",
    });
  }

  try {
    const ressource = await Model.query().findById(id);
    res.status(200).json(ressource);
  } catch (error) {
    next(error);
  }
};

export const createOne = (Model) => async (req, res, next) => {
  try {
    const dc = await Model.query().insert(req.body);
    res.status(201).json(dc);
  } catch (error) {
    next(error);
  }
};
