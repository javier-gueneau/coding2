<form onSubmit={this.formSubmit}>
        <input type='text' name='nombre1' value={this.state.nombre1} onChange={this.cambiarEstado} ></input><br/>
        <input type='text' name='apellido1' value={this.state.apellido1} onChange={this.cambiarEstado} ></input><br/>
        <button type='submit'>enviar</button> 
      </form>