const app = require('./servidor');
const contasRoutes = require('./routes/contasRoutes');
const criarContaRoutes = require('./routes/criarContaRoutes');
const removerContaRoutes = require('./routes/removerContaRoutes');
const depositoRoutes = require('./routes/depositoRoutes');
const saqueRoutes = require('./routes/saqueRoutes');
const transferenciaRoutes = require('./routes/transferenciaRoutes');
const saldoRoutes = require('./routes/saldoRoutes');
const extratoRoutes = require('./routes/extratoRoutes');

app.use('/', contasRoutes);
app.use('/criar', criarContaRoutes);
app.use('/remover', removerContaRoutes);
app.use('/', depositoRoutes);
app.use('/', saqueRoutes);
app.use('/', transferenciaRoutes);
app.use('/', saldoRoutes);
app.use('/', extratoRoutes);

app.listen(5000);