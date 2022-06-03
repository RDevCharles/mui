import './App.css';

//Importing our components here
import RecipeReviewCard from './RecipeReviewCard';
import ActionButton from './ActionButton';
import ButtonAppBar from './ButtonAppBar';


function App() {
  //after deleting everything in my main div
  //create an array and put some numbers in there.
  //i called it test but you can name it whatever you want

  let test = [1,2,3,4]
  return (
    <div className="App">

      {/*rendering out components*/}
      <ButtonAppBar/>
      
  
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>
{/*
Here we are dynamically rendering our RecipeReviewCard.
In a real world scenario we would be pulling some data from an api 
but an array with numbers will work for now.

I added and id prop in RecipeReviewCard and set it to 
i(short for item).

*/}

        {
          test.map((i) => {
return <RecipeReviewCard id={i} />
          })
        }
      </div>
      <ActionButton/>
        
   
    </div>
  );
}

export default App;
