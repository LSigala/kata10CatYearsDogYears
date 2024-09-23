'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function obtainYears(e: any){
        e.preventDefault();
    
        const data = {
          HumanYears: (e.target.humanYears.value)
        }

        const obtainAges:Array<any> = new Array<any>()

        if (data.HumanYears >= 1) {
          if(data.HumanYears == 1){
            const catAge = 15;
            const dogAge = 15;
            obtainAges.push([" humanYears: " + data.HumanYears])
            obtainAges.push([" catYears: " + catAge])
            obtainAges.push([" dogYears: " + dogAge])
          }

          if (data.HumanYears == 2) {
            const catAge = 24;
            const dogAge = 24;
            obtainAges.push([" humanYears: " + data.HumanYears])
            obtainAges.push([" catYears: " + catAge])
            obtainAges.push([" dogYears: " + dogAge])
          }

          if (data.HumanYears > 2) {
            const baseValue = data.HumanYears - 2;
            const catAge = baseValue * 4 + 24;
            const dogAge = baseValue * 5 + 24;
            obtainAges.push([" humanYears: " + data.HumanYears])
            obtainAges.push([" catYears: " + catAge])
            obtainAges.push([" dogYears: " + dogAge])
          }
          alert(obtainAges)
        }else{
          alert("The number has to be greater than 1")
        }

      }

  return (
      <form onSubmit={obtainYears} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3 col-5 mx-auto">
                    <label>Enter Human Age</label>
                    <input type="number" className="form-control" id="humanYears" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Data</button>
        </div>
    </form>
  );
}