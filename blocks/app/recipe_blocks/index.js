// Registering my block with a unique name
const { registerBlockType } = wp.blocks

const { PanelBody, PanelRow, TextControl } = wp.components;
const { InspectorControls } = wp.editor;
registerBlockType( 'reccpe/ings', {
  title: 'Ings',
  category: 'widgets',
  icon: 'book-alt',
  edit: ( props ) => {
    return [
      <InspectorControls>

        <PanelBody title={ 'Recipe' }>
          <PanelRow>
            <p>give a title to the recipe.</p>
          </PanelRow>
          <TextControl 
            value='test'
            help='ex: French Fris'
            onChange= {(newVal) => {
              console.log(newVal)
            }}
          ></TextControl>
        </PanelBody>

      </InspectorControls>,
    <div>
      <p>name: </p>
      <p>dificulty: </p>
    </div>
    ]
  },
  
  save: ( props ) => {
    return <p>hi im save</p>
  },
  support: {
    html: false,
    className: false,
  }
} );