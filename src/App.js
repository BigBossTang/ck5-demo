// import logo from './logo.svg';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {ClassicEditor} from '@editorx/ckeditor5-build-classic'
// eslint-disable-next-line
import {InlineEditor} from '@editorx/ckeditor5-build-classic'


function App() {
  const defaultConfig = {
    ckfinder: {
      getToken: ()=>{},
      uploadCallback:()=>{},
      uploadUrl: '',
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <CKEditor
          editor={ ClassicEditor }
          config={defaultConfig}
          data="<p>Hello from CKEditor 5 classic! </p>"
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
      />
      <div style={{margin:'50px'}}></div>
        <CKEditor
            editor={ InlineEditor }
            config={defaultConfig}
            data="<p>Hello from CKEditor 5 inline!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
      </header>
    </div>
  );
}

export default App;
