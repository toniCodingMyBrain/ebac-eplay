import { useState } from 'react'
import { Button } from '../../components/Button'
import Card from '../../components/Card/index'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/icons/boleto.png'
import cartao from '../../assets/icons/cartao.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(4, 'Nome completo deve ter pelo menos 4 caracteres')
        .required('Nome completo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      cpf: Yup.string()
        .min(14, 'CPF deve ter pelo menos 14 caracteres')
        .max(14, 'CPF deve ter pelo menos 14 caracteres')
        .required('CPF é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails devem ser iguais')
        .required('Confirmação de e-mail é obrigatória'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(4, 'O campo deve ter pelo menos 4 caracteres')
              .required('Nome do titular é obrigatório')
          : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(14, 'CPF deve ter pelo menos 14 caracteres')
              .max(14, 'CPF deve ter pelo menos 14 caracteres')
              .required('CPF é obrigatório')
          : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(4, 'O campo deve ter pelo menos 4 caracteres')
              .required('Nome no cartão é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(16, 'O campo deve ter 16 números')
              .max(16, 'O campo deve ter 16 números')
              .required('Número do cartão é obrigatório')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(2, 'O campo deve ter 2 números')
              .max(2, 'O campo deve ter 2 números')
              .required('Mês de expiração é obrigatório')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(4, 'O campo deve ter 4 números')
              .max(4, 'O campo deve ter 4 números')
              .required('Ano de expiração é obrigatório')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(3, 'O campo deve ter 3 números')
              .max(3, 'O campo deve ter 3 números')
              .required('Número de segurança é obrigatório')
          : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(4, 'O campo deve ter pelo menos 4 caracteres')
              .required('Nome completo é obrigatório')
          : schema
      )
    }),
    onSubmit: (values) => {
      console.log('Form submitted with values:', values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors
    return isTouched && isError ? message : ''
  }

  return (
    <>
      <form onSubmit={form.handleSubmit} className="container">
        <Card title="Dados de cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('email', form.errors.email)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  type="text"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">Email</label>
                <input
                  id="deliveryEmail"
                  type="email"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  id="confirmDeliveryEmail"
                  type="email"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'confirmDeliveryEmail',
                    form.errors.confirmDeliveryEmail
                  )}
                </small>
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="Pagamento">
          <>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={boleto} alt="Boleto" />
              Boleto bancário
            </TabButton>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={cartao} alt="Cartão" />
              Cartão de crédito
            </TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input
                        id="cardOwner"
                        type="text"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardOwner', form.errors.cardOwner)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input
                        id="cpfCardOwner"
                        type="text"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'cpfCardOwner',
                          form.errors.cpfCardOwner
                        )}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'cardDisplayName',
                          form.errors.cardDisplayName
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Numero do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <input
                        id="expiresMonth"
                        type="text"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Ano do vencimento</label>
                      <input
                        id="expiresYear"
                        type="text"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="136px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        name=""
                        id="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        <small>
                          {getErrorMessage(
                            'installments',
                            form.errors.installments
                          )}
                        </small>
                        <option value="">1x de R$ 200,00</option>
                        <option value="">2x de R$ 200,00</option>
                        <option value="">3x de R$ 200,00</option>
                        <option value="">4x de R$ 200,00</option>
                      </select>
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </>
        </Card>
        <Button
          type="button"
          variant="primary"
          title="Clique aqui para finalizar a compra"
        >
          Finalizar a compra
        </Button>
      </form>
    </>
  )
}

export default Checkout
