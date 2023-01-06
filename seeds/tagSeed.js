const { Tag } = require('../models')

const tagData = [
  {
    tag_name: 'trending',
  },
  {
    tag_name: 'recently added',
  },
  {
    tag_name: 'most popular',
  },
  {
    tag_name: 'best seller',
  },
  {
    tag_name: 'top 50',
  },
]

const seedTags = () => Tag.bulkCreate(tagData)

module.exports = seedTags
