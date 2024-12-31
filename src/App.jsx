import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import MyInformation from '../../project3/src/components/MyInformation';
function App() {
  return(
    <div>
      <MyInformation/>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  );
};

export default App;
