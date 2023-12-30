import React from "react";

class ClassComponent extends React.Component {
    state = {
        name: 'TESTANDO'
    }

    render (){
        return <div> {this.state.name} Um Componente baseado em classe  </div>
    }

}

export default ClassComponent