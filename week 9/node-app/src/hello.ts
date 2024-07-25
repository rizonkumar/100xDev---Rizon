const app = express();

enum ResponseStatus {
  Sucess = 200,
  NotFound = 404,
  Error = 500
}

app.get("/", (req, res) => {
  if(!req.query.userId) {
    res.status(ResponseStatus.NotFound).json({});
  }
})