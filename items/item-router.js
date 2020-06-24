const router = require("express").Router();


const Item = require('./items-model.js');
const authenticate = require('../auth/authenticate-middleware.js');
const checkRole = require('../auth/check-role-middleware.js');


router.get('/', (req, res) => {
    Item.find()
    .then(items => {
        res.json(items);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get items'});
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Item.findById(id)
    .then(items => {
        if(items){
            res.json(items);
        } else {
            res.status(404).json({ message: 'Could not find item with given id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message:'Failed to get item'})
    })
});

router.post('/', authenticate ,checkRole(1),(req, res) => {
  const itemData = req.body;

  Item.add(itemData)
  .then(items => {
      res.status(201).json(items)
  })
  .catch ( err => {
      res.status(500).json({ message: 'Failed to create new item'})
  })
});

router.put('/:id', authenticate ,checkRole(1),(req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Item.findById(id)
    .then( items => {
        if (items) {
            Item.update(changes,id)
            .then(updatedItem => {
                res.json({message:"updated item!"});
            })
        } else {
            res.status(404).json({ message: 'Could not find item with given id'})
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update item'})
    })
})


router.delete('/:id',  authenticate, checkRole(1), (req, res) => {
    const { id } = req.params;

    Item.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: 'Could not find item with given id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete item '})
    })
})

module.exports = router;