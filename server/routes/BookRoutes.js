// Example backend route (server/routes/bookRoutes.js)
router.get('/', async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const books = await Book.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      const count = await Book.countDocuments();
      
      res.json({
        books,
        total: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });