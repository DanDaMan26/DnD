//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase().replace(" ", "-")
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const ul = document.querySelector('ul'); // Select the <ul> element
        const lis = ul.getElementsByTagName('li'); // Get all <li> elements within the <ul>
        // Loop through all <li> elements and remove them one by one
        while (lis.length > 0) {
          ul.removeChild(lis[0]);
        }
        document.querySelector('ul').removeChild
        console.log(data.subclasses)
        if (!data.sublcasses) alert("please enter a spell")
        else{data.subclasses.forEach( obj => {
            console.log(obj.name)
            //create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.name
            //append the li to the ul
            document.querySelector('ul').appendChild(li)
        })}
      })  
      .catch(err => {
          console.log(`error ${err}`)
      });
}
