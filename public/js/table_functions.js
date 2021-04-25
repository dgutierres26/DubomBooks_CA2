// const bestsellerEl = document.getElementById("bestseller");
const checkoutEl = document.getElementById("checkout");
const subtotal = document.getElementById("subtotal");

// bestsellerEl.addEventListener('click', function(){
//     highlightBestseller(this.checked);
// });

checkoutEl.addEventListener('click', function(){
    calcBill();
});
// That function is responsible to show all bestsellers
// function highlightBestseller(isHighlight){
//     const rows = document.getElementsByTagName("TR");
//     if (!rows)
//         return;
//     for (const prop in rows){
//         const attr = rows[prop];
//         if (attr.nodeType == 1 && (attr.hasAttribute("bestseller"))){
//             const bestseller = attr.getAttribute("bestseller");
//             if (bestseller.toString() === "true" && isHighlight){
//                 attr.classList.add("table-success");
//             } else {
//                 attr.classList.remove("table-success");
//             }
//         }
//     }
// }
// That function is responsible to calculate the price
function calcBill(){
    const rows = document.getElementsByTagName("TR");
    if (!rows)
        return;
    let result = 0.00;
    
    for (const prop in rows){
        const row = rows [prop];
        console.log(row.nodeType)
        if (row.nodeType == 1 ){
            const td = row.children[0];
        
            const checkbox = td.firstChild;
            // console.log(row)

            if (checkbox.checked){
                const size = row.children.length - 1
                const price = row.children[size].innerText.trim()
                console.log(row.children[size]);
                result += parseFloat(price);                
            }
        }
    }

    subtotal.value = result.toFixed(2);
}

