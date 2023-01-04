const bookRouter = require('express').Router()
const { Book } = require('../../models')

bookRouter.get('/', async (req, res) => {
  try {
    const booksArr = await Book.findAll({})
    res.json(booksArr)
  } catch (err) {
    res.status(400).json(err)
  }
});

bookRouter.get('/:id', async (req, res) => {
  try {
    const singleBook = await Book.findByPk(req.params.id)
    res.json(singleBook)
  } catch (err) {
    res.status(400).json(err)
  }
});

bookRouter.put('/:id', async (req, res) => {
  try {
    const [singleBook] = await Book.update(req.body, {where: {id: req.params.id}})
    if(singleBook > 0) {
      console.log(singleBook);
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } 
    catch (err) {
    res.status(500).json(err);
  }
});

bookRouter.delete('/:id', async (req, res) => {
  try {
    const singleBook = Book.destroy({
      where: {
        id: req.params.id
      }
    });
    
    if (!singleBook) {
      res.status(404).json({ message: 'No book found with this id!'});
      return;
    }
    res.status(200).json({message: 'deleted successfully'});
  } catch(err) {
    res.status(500).json(err);
  }
});
module.exports = bookRouter
