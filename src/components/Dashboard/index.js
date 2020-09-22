import React, { useState, useEffect } from "react";
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import CardInfoBlock from '../CardInfoBlock'
import Chart from '../Rechart'
import { prettyPrintStat } from '../Util';
import numeral from "numeral";
import BasicTable from '../Table';
import Header from '../Header'
import './styles.css'

function Dashboard(props) {
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [graphData, setGraphData] = useState('')

    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
        .then((response) => response.json())
        .then((data) => {
            setGraphData(data.cases_time_series)
            setTableData(data.statewise)
            
        })
    },[])
    
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/India")
        .then((response) => response.json())
        .then((data) => {
            setCountryInfo(data);
        });
    }, []);
    
    if(!firebase.getCurrentUsername()) {
        alert('Please login first')
        props.history.replace('/login')
        return null
    }
	return (
            <>
				<Header />
                <section>
                    <div className="cardWrapper mb20">
                        <CardInfoBlock
                            onClick={(e) => setCasesType("cases")}
                            title="Coronavirus Cases"
                            isRed
                            className="cardItIem"
                            active={casesType === "cases"}
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={numeral(countryInfo.cases).format("0.0a")}
                        />
                        <CardInfoBlock
                            onClick={(e) => setCasesType("recovered")}
                            title="Recovered"
                            className="cardItIem"
                            active={casesType === "recovered"}
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={numeral(countryInfo.recovered).format("0.0a")}
                        />
                        <CardInfoBlock
                            onClick={(e) => setCasesType("deaths")}
                            title="Deaths"
                            isRed
                            className="cardItIem"
                            active={casesType === "deaths"}
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={numeral(countryInfo.deaths).format("0.0a")}
                        />
                    </div>
                {/* Rechart graphs starts here */}
                        <div className="graphWrapper">
                            <div className="graphItem">
                            <h3 className="sectionHeading">Spread Trends</h3>
                            <Chart data={graphData} />
                            </div>
                            
                        </div>
                {/* Rechart graphs ends here */}
                    <div className="tableWrapper mt20">
                        <h3 className="sectionHeading">Trends across the states</h3>
                        <BasicTable data={tableData} />
                    </div>
                </section>
            </>
	    )

	
}

export default withRouter(Dashboard)