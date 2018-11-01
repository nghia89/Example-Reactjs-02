import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        Name:'',
        PassWord:'',
        Description:'',
        Gender:0,
        Language:'en',
        Status:true

      };
      this.onHandleSubmit=this.onHandleSubmit.bind(this);
       this.onHandleChange=this.onHandleChange.bind(this);
    }

    onHandleChange (event){
       
        var target=event.target;
        var name=target.name;
        var value=target.type==='checkbox' ? target.checked: target.value;
        this.setState({
                [name]:value
            });
        }
    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
     <div className="container">
     	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
     		<div className="panel panel-success">
     			<div className="panel-heading">
     				<h3 className="panel-title">from</h3>
     			</div>
     			<div className="panel-body">
     				<form onSubmit={this.onHandleSubmit}>
     				
     					<div className="form-group">
     						<label>Username</label>
     						<input type="text" className="form-control" 
                             name="Name"
                             onChange={this.onHandleChange} 
                             value={this.state.Name}    
                            />
     					</div>
     					<div className="form-group">
     						<label>passWord</label>
     						<input type="password" className="form-control" 
                            name="PassWord"
                            onChange={this.onHandleChange} 
                            />
     					</div>
                        <div className="form-group">
                            <label>Mô tả</label>
                            <textarea name="Description" className="form-control" rows="3" 
                                onChange={this.onHandleChange}
                                value={this.state.Description} 
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>Giới tính</label>
                           <select name="Gender"  className="form-control" 
                             value={this.state.Gender} onChange={this.onHandleChange}>
                               <option value={0}>Nam</option>
                                <option value={1}>Nữ</option>
                           </select>
                        </div>
                        <div className="form-group">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="Language" 
                                    value="en" 
                                    onChange={this.onHandleChange}
                                    checked={this.state.Language==='en'}/>
                                    Tiếng anh
                                </label>
                                 <label>
                                    <input type="radio" name="Language" 
                                     value="vi"
                                     onChange={this.onHandleChange}
                                     checked={this.state.Language==='vi'}/>
                                    Tiếng việt
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                     value={true}
                                     onChange={this.onHandleChange}
                                     name="Status"
                                     checked={this.state.Status===true}
                                     />
                                    Trạng Thái
                                </label>
                            </div>
                        </div>


     					<button type="submit" className="btn btn-primary">Submit</button>
     				</form>
     			</div>
     		</div>
     	</div>
     </div>
    );
  }
}

export default App;
