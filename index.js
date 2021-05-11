import '@progress/kendo-theme-default/dist/all.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const data = [];
while(data.length < 300) {
	data.push({
		ProductID: data.length,
		ProductName: 'Product ' + data.length
	});
}
class App extends React.Component {
	constructor(props) {
        super(props);
		
        this.state = this.createState(0, 10);
        this.pageChange = this.pageChange.bind(this);
    }
	
    createState(skip, take) {
        return {
            items: data.slice(skip, skip + take),
            total: data.length,
            skip: skip,
            pageSize: take
        };
    }
	
    pageChange(event) {
        this.setState(this.createState(event.page.skip, event.page.take));
    }
	
    render() {
        return (
            <div>
                <Grid
                    style={{ maxHeight: '400px' }}
                    data={this.state.items}
                    pageChange={this.pageChange}
                    total={this.state.total}
                    skip={this.state.skip}
                    pageSize={this.state.pageSize}
                    pageable={{
                      buttonCount: 5,
                      info: true,
                      type: 'numeric',
                      pageSizes: [10, 20, 50, 100, 200],
                      previousNext: true
                    }}
                >
                    <GridColumn field="ProductID" title="Id" width="50px" />
                    <GridColumn field="ProductName" title="Product Name" />
                </Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
