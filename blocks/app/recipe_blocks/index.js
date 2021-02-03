// Registering my block with a unique name

const { registerBlockType } = wp.blocks
registerBlockType( 'my-plugin/book', {
  title: 'Book',
  category: 'widgets',
  icon: 'book-alt',
  edit: () => {
    return <p>hi im edit</p>
  },
  
  save: () => {
    return <p>hi im save</p>
  },
  support: {
    html: false,
    className: false,
  }
} );