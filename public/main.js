const deleteText = document.querySelectorAll('.del');
const addP = document.querySelectorAll('.upDoot');
const updateT = document.querySelectorAll('.completed');

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteTask)
})

Array.from(addP).forEach((element) => {
    element.addEventListener('click', addPriority)
})

Array.from(updateT).forEach((element) => {
    element.addEventListener('click', updateTask)
})

async function deleteTask(){
    const tName = this.parentNode.childNodes[1].innerText
    const dDate = this.parentNode.childNodes[3].innerText
    const tPriority = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'taskNameS': tName,
                'dueDateS': dDate,
                'taskPriorityS': tPriority
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

async function addPriority() {
  const tName = this.parentNode.childNodes[1].innerText;
  const dDate = this.parentNode.childNodes[3].innerText;
  const uDoot = Number(this.parentNode.childNodes[5].innerText);
  try {
    const res = await fetch("addPriority", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskNameS: tName,
        dueDateS: dDate,
        taskPriorityS: uDoot
      })
    })
    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}