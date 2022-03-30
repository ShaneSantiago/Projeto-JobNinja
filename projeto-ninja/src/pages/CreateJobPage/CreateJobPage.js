import React from "react"
import axios from "axios"
import { CreateJobContainer } from "./styled"
import { BASE_URL, headers } from '../../constants/urls'

class CreateJobPage extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        dueDate: "",
        paymentMethods: []
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }

    handleDueDate = (e) => {
        this.setState({dueDate: e.target.value})
    }

    handlePaymentMethods = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({ paymentMethods: value })
    }

    createJob = () => {
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            dueDate: this.state.dueDate,
            paymentMethods: this.state.paymentMethods,
        }

        axios.post(`${BASE_URL}/jobs`, body, headers)
        .then(() => {
            alert(`O serviço ${this.state.title} foi criado com sucesso!`)
            this.setState({
                title: "",
                description: "",
                price: "",
                dueDate: "",
                paymentMethods: []
            })
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
            <CreateJobContainer>
                <h1>Cadastre o seu serviço</h1>
                <input value={this.state.title} onChange={this.handleTitle} placeholder="Título" />
                <input value={this.state.description} onChange={this.handleDescription} placeholder="Descrição" />
                <input value={this.state.price} onChange={this.handlePrice} placeholder="Preço" type="number" />
                <select multiple value={this.state.paymentMethods} onChange={this.handlePaymentMethods}>
                    <option>Cartão de Débito</option>
                    <option>Cartão de Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>
                <input value={this.state.dueDate} onChange={this.handleDueDate} placeholder="Prazo do Serviço" type="date" />
                <button onClick={this.createJob}>Cadastrar Serviço</button>
            </CreateJobContainer>
        )
    }
}

export default CreateJobPage