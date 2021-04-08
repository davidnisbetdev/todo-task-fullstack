const deleteText = document.querySelectorAll('.del');
const updateT = document.querySelectorAll('.completed')

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteTask)
})

Array.from(updateT).forEach((element) => {
    element.addEventListener('click', updateTask)
})


async function deleteTask(){
    const tName = this.parentNode.childNodes[1].innerText
    const dDate = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'taskNameS': tName,
                'dueDateS': dDate,
            })
        })
    const data = await response.json()
    console.log(data)
    location.reload()
    }catch(err){
        console.log(err)
    }
}

async function updateTask() {
  const tName = this.parentNode.childNodes[1].innerText;
  try {
    const res = await fetch("updateTask", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskNameS: tName,
      }),
    });
    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}