// import logo from './logo.svg';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import editorClassic from '@ckeditor/ckeditor5-build-classic'
// eslint-disable-next-line
import editorInline from '@ckeditor/ckeditor5-build-inline'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CKEditor
                    editor={ editorClassic }
                    data="<p>Hello from CKEditor 5!</p>"
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
