const table = document.querySelector("#table")
const tbody = document.querySelector("#tbody")


function runderData(doc) {
    const tr = document.createElement("tr")
    const age = document.createElement("td")
    const sex = document.createElement("td")
    const cp = document.createElement("td")
    const trestbps = document.createElement("td")
    const chol = document.createElement("td")
    const fbs = document.createElement("td")
    const restecg = document.createElement("td")
    const thalach = document.createElement("td")
    const exang = document.createElement("td")
    const oldpeak = document.createElement("td")
    const slope = document.createElement("td")
    const ca = document.createElement("td")
    const thal = document.createElement("td")
    const target = document.createElement("td")



    tr.setAttribute("data-id", doc.id)
    age.innerHTML = doc.data().a
    sex.innerHTML = doc.data().b
    cp.innerHTML = doc.data().c
    trestbps.innerHTML = doc.data().d
    chol.innerHTML = doc.data().e
    fbs.innerHTML = doc.data().f
    restecg.innerHTML = doc.data().g
    thalach.innerHTML = doc.data().h
    exang.innerHTML = doc.data().l
    oldpeak.innerHTML = doc.data().m
    slope.innerHTML = doc.data().n
    ca.innerHTML = doc.data().o
    thal.innerHTML = doc.data().x
    target.innerHTML = doc.data().t

    tr.appendChild(age); tr.appendChild(sex); tr.appendChild(cp); tr.appendChild(trestbps); tr.appendChild(chol)
    tr.appendChild(fbs); tr.appendChild(restecg); tr.appendChild(thalach); tr.appendChild(exang); tr.appendChild(oldpeak)
    tr.appendChild(slope); tr.appendChild(ca); tr.appendChild(thal); tr.appendChild(target)
    tbody.appendChild(tr);

}

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        runderData(doc)
        console.log(doc.data())
    });
});
// db.collection("cafes").get().then((snapshot) => {

//     snapshot.docs.forEach(doc => runderData(doc))
// })
