import "@/app/globals.css";
import Link from "next/link";
import Country from "@/app/components/Country";

export default function CountryName({ params }: {params:{country_name:string}}) {
  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 2166,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 765464,
      capital: "Delhi",
    },
  ];

  function findCountry(name: string): {name:string, population:number, capital:string} | undefined {

    return countries.find(
      (country) => name.toLowerCase() == country.name.toLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <div>

      <Country countryInfo = {result} url = {params.country_name} />
      
      <div>
        <li className="cust_button">
          <Link className="" href="/">
          Back
          </Link>
        </li>
        
      </div>
    </div>
  );
}
