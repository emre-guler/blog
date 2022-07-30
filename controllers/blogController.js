exports.getAllBlogs = (req, res) => {
  res.status(200).json({
    status: "success",
    results: Blogs.length,
    data: {
      Blogs,
    },
  });
};

exports.getBlog = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
  const Blog = Blogs.find((el) => el.id === id);

  //  if (id > Blogs.length) {

  if (!Blog) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      Blog,
    },
  });
};

exports.createBlog = (req, res) => {
  //console.log(req.body);
  const newId = Blogs[Blogs.length - 1].id + 1;
  const newBlog = Object.assign({ id: newId }, req.body);

  Blogs.push(newBlog);

  fs.writeFile(
    `${__dirname}/dev-data/data/Blogs-simple.json`,
    JSON.stringify(Blogs),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          Blog: newBlog,
        },
      });
    }
  );
};

exports.updateBlog = (req, res) => {
  const id = req.params.id * 1;

  if (id > Blogs.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      Blog: "<Updated Blog here...></Updated>",
    },
  });
};

exports.deleteBlog = (req, res) => {
  const id = req.params.id * 1;

  if (id > Blogs.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};
