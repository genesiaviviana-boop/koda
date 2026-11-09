/* KODA en español.
   Traduce todo lo que se muestra en pantalla (textos fijos y mensajes que genera la app).
   Para volver al inglés basta con quitar la línea <script src="koda-es.js"> de las páginas. */
(function () {
    'use strict';

    // ---------- Textos exactos ----------
    var D = {
        // Navegación y encabezado
        'Dashboard': 'Inicio', 'Envelopes': 'Sobres', 'Obligations': 'Obligaciones', 'Goals': 'Metas', 'Check Pay': 'Pagos',
        'Notifications': 'Notificaciones', 'Mark all read': 'Marcar como leídas', 'Clear': 'Limpiar', 'All clear': 'Todo al día',
        'Ask KODA': 'Pregúntale a KODA', 'Message': 'Mensaje', 'New chat': 'Chat nuevo', 'Close': 'Cerrar', 'Sign out': 'Cerrar sesión', 'New': 'Nuevo', 'Search transactions, envelopes, accounts…': 'Buscar movimientos, sobres, cuentas…', 'Search': 'Buscar', 'Income · latest period': 'Ingresos · último período', 'Expenses · latest period': 'Gastos · último período', 'Net · latest period': 'Neto · último período', 'Real balance, card debt included': 'Saldo real, incluye deuda de tarjetas',
        'You will need your access key to sign in again on this device.': 'Necesitarás tu clave de acceso para entrar de nuevo en este dispositivo.',
        'Just now': 'Justo ahora', 'Now': 'Ahora',
        'Ask about your accounts, envelopes, bills or goals.': 'Pregunta por tus cuentas, sobres, pagos o metas.',
        'How much did I spend this month?': '¿Cuánto gasté este mes?', 'Which envelope is running low?': '¿Qué sobre se está quedando sin fondos?',
        'What do I owe in total?': '¿Cuánto debo en total?', 'Which category costs me the most?': '¿Qué categoría me cuesta más?',
        'What bills are coming up?': '¿Qué pagos vienen?',
        'Something went wrong.': 'Algo salió mal.', 'Could not reach the server. Check your connection.': 'No se pudo conectar con el servidor. Revisa tu conexión.',

        // Dashboard
        'Available balance': 'Saldo disponible', 'My accounts': 'Mis cuentas', 'Manage': 'Administrar', 'Fixed bills': 'Pagos fijos',
        'of income goes to bills': 'del ingreso se va en pagos', 'Comparison': 'Comparación', 'Income vs expenses': 'Ingresos vs gastos',
        '1Y': '1A', 'Income': 'Ingresos', 'Expenses': 'Gastos', 'Net': 'Neto', 'Active envelopes': 'Sobres activos',
        'No active envelopes.': 'No hay sobres activos.', 'Spending breakdown': 'Distribución de gastos', 'View details': 'Ver detalle',
        'No expenses to show.': 'No hay gastos para mostrar.', 'Next goal': 'Próxima meta', 'No goals yet': 'Aún no hay metas',
        'All goals reached': 'Todas las metas logradas', '0 / 0 paid': '0 / 0 pagados', 'History': 'Historial', 'View all': 'Ver todo',
        'No recent transactions.': 'No hay movimientos recientes.', 'No accounts yet. Use the + button to add one.': 'Aún no hay cuentas. Usa el botón + para agregar una.',
        'TOTAL GASTOS': 'Total gastos', 'Otros': 'Otros', 'Ingresos': 'Ingresos', 'Gastos': 'Gastos',
        'Spending accounts': 'Cuentas de gasto', 'In envelopes': 'En sobres', 'In backups': 'En respaldos', 'Left to pay': 'Por pagar', 'Available': 'Disponible',
        'Choose the account you spend from: edit an account and turn on "Counts as spending money".': 'Elige la cuenta de la que gastas: edita una cuenta y activa "Cuenta como dinero de gasto".',
        'Spending': 'Gasto', ' · Spending': ' · Gasto',
        'New account': 'Cuenta nueva', 'Edit account': 'Editar cuenta', 'Account name': 'Nombre de la cuenta', 'Bank': 'Banco', 'Initials': 'Iniciales',
        'Bank account': 'Cuenta bancaria', 'Credit card': 'Tarjeta de crédito', 'Counts as spending money': 'Cuenta como dinero de gasto',
        'Balance': 'Saldo', 'Available now': 'Disponible ahora', 'Credit limit': 'Límite de crédito', 'Cancel': 'Cancelar', 'Confirm': 'Confirmar',
        'Delete': 'Eliminar', 'Edit': 'Editar', 'selected': 'seleccionados', 'covers': 'cubre', 'History': 'Historial', 'Dashboard - ': '', 'Save': 'Guardar', 'Save changes': 'Guardar cambios', 'Done': 'Listo', 'Search': 'Buscar',
        'Missing info': 'Falta información', 'Add a name, bank and initials.': 'Agrega un nombre, un banco y las iniciales.',
        'Add the credit limit of the card.': 'Agrega el límite de crédito de la tarjeta.', 'Check the amounts': 'Revisa los montos',
        'Available cannot be higher than the credit limit.': 'El disponible no puede ser mayor que el límite de crédito.',
        'this account': 'esta cuenta', 'this item': 'este pago', 'this bill': 'este pago fijo', 'this debt': 'esta deuda', 'this loan': 'este préstamo',
        'this transaction': 'este movimiento',
        "This can't be undone.": 'Esto no se puede deshacer.', 'Got it': 'Entendido',
        'Not enough funds': 'Fondos insuficientes', 'Check the balance of your account or envelope.': 'Revisa el saldo de tu cuenta o de tu sobre.',
        'Complete': 'Completar', 'Heads up:': 'Ojo:', 'Balance unavailable.': 'Saldo no disponible.', 'Elige cuenta origen primero.': 'Elige primero la cuenta de origen.',
        'Saved info': 'Información guardada', 'Enter': 'Enter',

        // Nuevo movimiento
        'New entry': 'Movimiento nuevo', 'Expense': 'Gasto', 'Move': 'Mover', 'Pay': 'Pagar', 'Goal': 'Meta', 'Name': 'Nombre', 'Amount': 'Monto',
        'Select account': 'Elige la cuenta', 'Move to': 'Mover a', 'Bills': 'Pagos fijos', 'Debts': 'Deudas', 'Goal to fund': 'Meta a abonar',
        'Charge an envelope?': '¿Cobrar a un sobre?', 'Category': 'Categoría', 'Groceries': 'Supermercado', 'Transport': 'Transporte', 'Health': 'Salud',
        'Utilities': 'Servicios', 'Leisure': 'Ocio', 'Education': 'Educación', 'Home': 'Hogar', 'General': 'General', 'Today': 'Hoy', 'Month Year': 'Mes Año',
        'Su': 'Do', 'Mo': 'Lu', 'Tu': 'Ma', 'We': 'Mi', 'Th': 'Ju', 'Fr': 'Vi', 'Sa': 'Sá',
        'January': 'Enero', 'February': 'Febrero', 'March': 'Marzo', 'April': 'Abril', 'May': 'Mayo', 'June': 'Junio', 'July': 'Julio', 'August': 'Agosto',
        'September': 'Septiembre', 'October': 'Octubre', 'November': 'Noviembre', 'December': 'Diciembre',
        'Jan': 'Ene', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Abr', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Ago', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dic',
        'Wk 1': 'Sem 1', 'Wk 2': 'Sem 2', 'Wk 3': 'Sem 3', 'Wk 4': 'Sem 4',
        'Invalid amount': 'Monto no válido', 'Enter an amount greater than 0.': 'Escribe un monto mayor que 0.',
        'Account required': 'Falta la cuenta', 'Select an account.': 'Elige una cuenta.', 'Account error': 'Error de cuenta', 'Selected account not found.': 'No se encontró la cuenta elegida.',
        'Destination required': 'Falta el destino', 'Select the account to move money to.': 'Elige la cuenta a la que vas a mover el dinero.',
        'Same account': 'Misma cuenta', 'Choose a different destination account.': 'Elige una cuenta de destino distinta.',
        'Nothing selected': 'No elegiste nada', 'Select what you are paying.': 'Elige lo que vas a pagar.', 'Payment too high': 'Pago demasiado alto',
        'Select the goal to fund.': 'Elige la meta que vas a abonar.', 'Could not save the entry': 'No se pudo guardar el movimiento',
        'Unknown error. Try again.': 'Error desconocido. Intenta de nuevo.', 'Could not save': 'No se pudo guardar', 'Something went wrong. Try again.': 'Algo salió mal. Intenta de nuevo.',
        'Automatic entry failed': 'Falló un registro automático', 'Automatic income registered': 'Ingreso automático registrado',
        'Automatic transfer registered': 'Transferencia automática registrada', 'Automatic expense registered': 'Gasto automático registrado',
        'Automatic entries registered': 'Movimientos automáticos registrados', 'Bank emails need a link': 'Correos del banco sin vincular',
        'Possible duplicate skipped': 'Posible duplicado omitido', 'Needs your attention': 'Necesita tu atención',
        'A bank email could not be read.': 'No se pudo leer un correo del banco.', 'Your sheet is not set up': 'Tu hoja aún no está lista',
        'Open the setup page and press Start empty to begin saving.': 'Abre la página de inicio de sesión y pulsa "Empezar de cero" para empezar a guardar.',
        'Could not load your data': 'No se pudieron cargar tus datos', 'Changes not saved': 'Cambios sin guardar',
        'Envelope overdrawn': 'Sobre sobregirado', 'Negative balance': 'Saldo negativo', 'Credit limit almost used': 'Límite de crédito casi agotado',
        'Goal reached': 'Meta alcanzada', 'Goal past its date': 'Meta fuera de fecha',
        'Affects net available': 'Afecta el disponible', 'Cobro': 'Cobro',

        // Sobres
        'New envelope': 'Sobre nuevo', 'Total assigned': 'Total asignado', 'To fund': 'Por fondear', 'Funded': 'Fondeado', 'Overspent': 'Sobregirado', 'Active Allocation': 'Asignación activa',
        'Most funded first': 'Más fondeados primero', 'Sort by': 'Ordenar por', 'Least funded first': 'Menos fondeados primero', 'Alphabetical A-Z': 'Alfabético A-Z',
        'Custom order': 'Orden personalizado', 'Highest amount': 'Mayor monto', 'Lowest amount': 'Menor monto', 'Unpaid first': 'Pendientes primero',
        'Highest balance': 'Mayor saldo', 'Lowest balance': 'Menor saldo', 'Most paid': 'Más pagado',
        'No envelopes yet. Use "New envelope" to create the first one.': 'Aún no hay sobres. Usa "Sobre nuevo" para crear el primero.',
        'Add Funds': 'Agregar fondos', 'Envelope': 'Sobre', '0% funded': '0% fondeado', 'of $0': 'de $0', 'KODA Insight': 'KODA te dice', 'Calculating...': 'Calculando...',
        'Cover Overspending': 'Cubrir sobregiro', 'Notes': 'Notas', 'Recent transactions': 'Movimientos recientes', 'Edit envelope': 'Editar sobre',
        'Envelope name': 'Nombre del sobre', 'Budget': 'Presupuesto', 'Top-up 1': 'Reposición 1', 'Top-up 2': 'Reposición 2',
        'Transfer available balance from another envelope to clear this negative amount.': 'Traspasa saldo disponible de otro sobre para cubrir este monto negativo.',
        'Deficit': 'Déficit', 'This envelope is fully funded for this period.': 'Este sobre está completo para este período.', 'Load more': 'Ver más',
        'No transactions found.': 'No hay movimientos.', 'No available funds in other envelopes.': 'No hay fondos disponibles en otros sobres.',
        'Fully funded': 'Completo', 'Show less': 'Ver menos',

        // Obligaciones
        'Add bill': 'Agregar pago fijo', 'Add debt': 'Agregar deuda', 'Add loan': 'Agregar préstamo', 'Recurring payments': 'Pagos recurrentes',
        'Active debts': 'Deudas activas', 'Money owed to you': 'Dinero que te deben', 'Total debts': 'Total de deudas', 'Receivables': 'Por cobrar',
        '0% of income': '0% del ingreso', '0 debts · 0% of income': '0 deudas · 0% del ingreso', '0 active': '0 activos', '0 debts': '0 deudas',
        'No fixed bills yet. Use "Add bill" to create the first one.': 'Aún no hay pagos fijos. Usa "Agregar pago fijo" para crear el primero.',
        'No debts yet. Use "Add debt" to create the first one.': 'Aún no hay deudas. Usa "Agregar deuda" para crear la primera.',
        'No receivables yet. Use "Add loan" to register money you lent.': 'Aún no hay cobros. Usa "Agregar préstamo" para registrar dinero que prestaste.',
        'New bill': 'Pago fijo nuevo', 'Edit bill': 'Editar pago fijo', 'New debt': 'Deuda nueva', 'Edit debt': 'Editar deuda', 'New loan': 'Préstamo nuevo',
        'Paycheck 1 amount': 'Monto de la quincena 1', 'Paycheck 2 amount': 'Monto de la quincena 2', 'Total debt': 'Deuda total',
        'Remaining balance': 'Saldo pendiente', 'Paycheck 1 payment': 'Pago de la quincena 1', 'Paycheck 2 payment': 'Pago de la quincena 2',
        'Payment history': 'Historial de pagos', 'Date / time': 'Fecha / hora', 'Paid': 'Pagado', 'Remaining': 'Pendiente', 'Who borrowed it': 'Quién lo pidió',
        'Amount lent': 'Monto prestado', 'From account': 'Desde la cuenta', 'Date': 'Fecha', '+ Lend more': '+ Prestar más', '+ Record payment': '+ Registrar pago',
        'Description': 'Descripción', 'Lent (+)': 'Prestado (+)', 'Paid (-)': 'Pagado (-)', 'Start: N/A': 'Inicio: N/D', 'Delete loan': 'Eliminar préstamo',
        'Outstanding:': 'Pendiente:', 'Lend more': 'Prestar más', 'Account': 'Cuenta', 'Record payment': 'Registrar pago', 'Edit transaction': 'Editar movimiento',
        'Payment': 'Pago', 'Additional loan': 'Préstamo adicional', 'Initial transfer': 'Transferencia inicial', 'No description': 'Sin descripción',
        'Paid off': 'Saldada', 'Settled': 'Saldado', 'No monthly payment': 'Sin pago mensual', 'No payments yet.': 'Aún no hay pagos.', 'No transactions yet.': 'Aún no hay movimientos.',
        'Select envelope': 'Elige un sobre', 'Months to cover': 'Meses a cubrir', 'Add to backup': 'Agregar al respaldo', 'Use from backup': 'Usar del respaldo',
        'Move an envelope here': 'Mover un sobre aquí', 'None': 'Ninguno', 'Select envelope.': 'Elige un sobre.', 'Enter an amount.': 'Escribe un monto.',
        'Added to backup': 'Agregado al respaldo', 'Used from backup': 'Usado del respaldo', 'Select an envelope.': 'Elige un sobre.',
        'Add a name and an amount for at least one paycheck.': 'Agrega un nombre y un monto en al menos una quincena.',
        'Backup has money': 'El respaldo tiene dinero', 'Use the backup money or move it first, then delete this bill.': 'Usa o mueve el dinero del respaldo y luego elimina este pago fijo.',
        'Use the backup money or move it first, then delete this debt.': 'Usa o mueve el dinero del respaldo y luego elimina esta deuda.',
        'Add a name and the total amount of the debt.': 'Agrega un nombre y el monto total de la deuda.', 'Check the balance': 'Revisa el saldo',
        "The remaining balance can't be negative or higher than the total debt.": 'El saldo pendiente no puede ser negativo ni mayor que la deuda total.',
        'Check the payments': 'Revisa los pagos', "Payments can't be negative.": 'Los pagos no pueden ser negativos.', 'Select account': 'Elige la cuenta',
        'Enter the name of the person who borrowed the money.': 'Escribe el nombre de quien pidió el dinero.', 'Enter the amount you lent.': 'Escribe el monto que prestaste.',
        'Select the account the money came from.': 'Elige la cuenta de donde salió el dinero.', 'Enter a valid amount.': 'Escribe un monto válido.',
        'Amount too high': 'Monto demasiado alto', 'Backup': 'Respaldo',

        // Metas
        'New Goal': 'Meta nueva', 'Total capital': 'Capital total', 'Left to save': 'Por ahorrar', 'In progress': 'En progreso', 'Achieved': 'Logradas',
        'Capital composition': 'Composición del capital', 'Total': 'Total', 'Selecting...': 'Eligiendo...', 'Insights': 'Resumen', 'Status': 'Estado',
        'Est. duration': 'Duración estimada', 'Paychecks left': 'Quincenas restantes', 'Suggested': 'Sugerido', 'Growth projection': 'Proyección de crecimiento',
        'MAX': 'MAX', 'History vs ideal': 'Historial vs ideal', 'Ideal: $0': 'Ideal: $0', 'New saving goal': 'Meta de ahorro nueva', 'Edit saving goal': 'Editar meta de ahorro',
        'Goal amount': 'Monto de la meta', 'Saved so far': 'Ahorrado hasta ahora', 'Target date (Month/Year)': 'Fecha objetivo (mes/año)', 'Select date': 'Elige la fecha',
        'This month': 'Este mes', 'Paycheck 1 savings': 'Ahorro de la quincena 1', 'Paycheck 2 savings': 'Ahorro de la quincena 2', 'All goals': 'Todas las metas',
        'Closest to completion': 'Más cerca de completarse', 'Newest first': 'Más recientes primero', 'Oldest first': 'Más antiguas primero', 'Hall of Fame': 'Salón de logros',
        'No goals yet. Use "New Goal" to create the first one.': 'Aún no hay metas. Usa "Meta nueva" para crear la primera.', 'No achievements yet.': 'Aún no hay logros.',
        'Complete goal': 'Completar meta', 'It will move to the Hall of Fame.': 'Pasará al Salón de logros.', 'Just created': 'Recién creada', 'On track': 'Al día',
        'Behind': 'Atrasada', 'At risk': 'En riesgo', 'No data': 'Sin datos', 'Already fully funded': 'Ya está completa', 'Target date is in the past': 'La fecha objetivo ya pasó',
        'Add a name, goal amount and target date.': 'Agrega un nombre, el monto de la meta y la fecha objetivo.', 'Less than 1 month': 'Menos de 1 mes',
        'Ideal': 'Ideal', 'Saved': 'Ahorrado',

        // Check Pay
        'Setup': 'Plantilla', 'Add payment': 'Agregar pago', 'Progress': 'Progreso', 'Payments': 'Pagos', 'Nothing here yet': 'Aún no hay nada',
        'New payment': 'Pago nuevo', 'Edit payment': 'Editar pago', 'New item': 'Elemento nuevo', 'Edit item': 'Editar elemento', 'Fixed': 'Fijo', 'Debt': 'Deuda', 'Manual': 'Manual',
        'Item': 'Elemento', 'Select': 'Elegir', 'Add item': 'Agregar elemento', 'Load template': 'Cargar plantilla', 'Add a name for this payment.': 'Agrega un nombre para este pago.',
        'Select an item first.': 'Primero elige un elemento.', 'Add an amount greater than zero.': 'Agrega un monto mayor que cero.', 'Already added': 'Ya está agregado',
        'Something went wrong': 'Algo salió mal', 'The payment could not be saved.': 'No se pudo guardar el pago.', 'The template could not be loaded.': 'No se pudo cargar la plantilla.',
        'Nothing available': 'No hay nada disponible', 'Empty': 'Vacío', 'paid': 'pagados', 'complete this period': 'completo en este período',

        // Historial
        'Categories': 'Categorías', 'New category': 'Categoría nueva', 'Filters': 'Filtros', 'Show': 'Mostrar', 'Transfers': 'Transferencias',
        'Goal contributions': 'Abonos a metas', 'Envelope funding': 'Fondeo de sobres', 'Loans': 'Préstamos', 'Dates': 'Fechas', 'Export': 'Exportar',
        'Transaction': 'Movimiento', 'No transactions match these filters.': 'Ningún movimiento coincide con estos filtros.', 'Export to Excel': 'Exportar a Excel',
        'Nothing to export': 'Nada que exportar', 'Exported as CSV': 'Exportado como CSV',
        'The Excel library did not load, so the file was saved as CSV. Excel opens it normally.': 'La librería de Excel no cargó, así que el archivo se guardó como CSV. Excel lo abre normalmente.',
        'Category exists': 'La categoría ya existe', 'That category already exists.': 'Esa categoría ya existe.', 'Balances will be reverted.': 'Los saldos se revertirán.',
        'Past transactions keep their label.': 'Los movimientos anteriores conservan su etiqueta.', 'Automatic': 'Automático', 'Exporting...': 'Exportando...',
        'Transfer': 'Transferencia', 'Goal contribution': 'Abono a meta', 'Debt payment': 'Pago de deuda', 'Bill payment': 'Pago fijo', 'Loan': 'Préstamo',

        // Acceso (login)
        'Your money,': 'Tu dinero,', 'always in sync.': 'siempre sincronizado.', 'Follow these steps to open your dashboard.': 'Sigue estos pasos para abrir tu panel.',
        'Sign in': 'Iniciar sesión', 'Prepare your sheet': 'Prepara tu hoja', 'Add your accounts': 'Agrega tus cuentas', 'Server address': 'Dirección del servidor',
        'Access key': 'Clave de acceso', 'Keep me signed in on this device': 'Mantener la sesión en este dispositivo', 'Continue': 'Continuar',
        'Change server': 'Cambiar servidor', 'Keep my data': 'Conservar mis datos', 'Start empty': 'Empezar de cero', 'Incorrect access key.': 'Clave de acceso incorrecta.',
        'Could not reach the server. Check the server address and your connection.': 'No se pudo conectar con el servidor. Revisa la dirección y tu conexión.',
        'Enter the server address.': 'Escribe la dirección del servidor.', 'Enter your access key.': 'Escribe tu clave de acceso.',
        'Your sheet is connected. Start empty to begin with a clean KODA.': 'Tu hoja está conectada. Empieza de cero para tener un KODA limpio.',
        'This clears accounts, envelopes, obligations, goals and history in your Google Sheet.': 'Esto borra cuentas, sobres, obligaciones, metas e historial de tu hoja de Google.',
        'Your sheet will be prepared for KODA.': 'Tu hoja se preparará para KODA.', 'Your session ended. Sign in again.': 'Tu sesión terminó. Inicia sesión de nuevo.',

        // Móvil
        'Add': 'Agregar', 'Add entry': 'Agregar movimiento', 'Edit entry': 'Editar movimiento', 'Details': 'Detalles', 'Send': 'Enviar', 'Filters': 'Filtros',
        'Spent this month': 'Gastado este mes', 'Income this month': 'Ingresos este mes', 'Send now': 'Enviar ahora', 'Accounts': 'Cuentas', 'Activity': 'Actividad',
        'All': 'Todos', 'Bills and debts': 'Pagos y deudas', 'Ask': 'Preguntar', 'Type': 'Tipo', 'Time': 'Hora', 'Source': 'Origen',
        'No connection': 'Sin conexión', 'Invalid server response': 'Respuesta del servidor no válida', 'Unknown error': 'Error desconocido',
        'Nothing to send': 'Nada que enviar', 'Still no connection': 'Aún sin conexión', 'Sent': 'Enviado', 'Remove this entry? It could not be sent.': '¿Quitar este movimiento? No se pudo enviar.',
        'A bank email needs an account link (mapa_cuentas)': 'Un correo del banco necesita vincularse a una cuenta (pestaña mapa_cuentas)',
        'Up to date': 'Al día', 'Offline. Showing the last saved data.': 'Sin conexión. Mostrando los últimos datos guardados.',
        'Choose your spending account in KODA on your computer.': 'Elige tu cuenta de gasto en KODA desde la computadora.', 'Credit card.': 'Tarjeta de crédito.',
        'Full': 'Completo', 'No envelopes yet.': 'Aún no hay sobres.', 'No goals yet.': 'Aún no hay metas.', 'Waiting to be sent': 'Esperando para enviarse',
        'Deadline': 'Fecha límite', 'Ideal contribution': 'Aporte ideal', 'Fixed bill': 'Pago fijo', 'First half': 'Primera quincena',
        'Second half': 'Segunda quincena', 'Add an account first from KODA on your computer': 'Primero agrega una cuenta desde KODA en la computadora',
        'Enter an amount greater than zero.': 'Escribe un monto mayor que cero.', 'Expense saved': 'Gasto guardado', 'Income saved': 'Ingreso guardado',
        'Saved on this phone. It will be sent when you have a connection.': 'Guardado en este teléfono. Se enviará cuando tengas conexión.',
        'Delete entry': 'Eliminar movimiento', 'Tap again to delete': 'Toca de nuevo para eliminar', 'Deleted': 'Eliminado',
        'You need a connection to delete an entry.': 'Necesitas conexión para eliminar un movimiento.', 'You need a connection to edit an entry.': 'Necesitas conexión para editar un movimiento.',
        'Release to refresh': 'Suelta para actualizar', 'Pull to refresh': 'Desliza para actualizar', 'Pending': 'Pendiente', 'Nothing matches.': 'Nada coincide.',
        'No activity yet.': 'Aún no hay actividad.', 'No bills or debts yet.': 'Aún no hay pagos ni deudas.', 'Nothing to pay right now.': 'No hay nada por pagar ahora.',
        'Recent activity': 'Actividad reciente', 'Not sent': 'No enviado', 'Show all': 'Ver todo', 'No accounts yet. Add them from KODA on your computer.': 'Aún no hay cuentas. Agrégalas desde KODA en la computadora.', '/mo': '/mes',
        'Add credit': 'Agregar crédito', 'Top-up': 'Reposición',

        // Servidor
        'Payroll': 'Nómina', 'Cash Withdrawal': 'Retiro de efectivo', 'Credit card payment': 'Pago de tarjeta', 'Bank tax': 'Impuesto bancario',
        'Payroll deposited. The email has no amount: add it as an income.': 'Se depositó la nómina. El correo no trae el monto: regístrala como ingreso.',
        'Payroll already logged manually': 'La nómina ya estaba registrada a mano',
        'Uber trip: registered from the Uber receipt': 'Viaje de Uber: se registra desde el recibo de Uber',
        'Uber': 'Uber'
    };
    // Sobrescribe tipos de movimiento mostrados
    D['Expense'] = 'Gasto'; D['Income'] = 'Ingresos'; D['Fixed'] = 'Fijo';

    // ---------- Patrones con datos variables ----------
    var P = [
        [/^KODA - (.+)$/, function (m, t) { return 'KODA - ' + t(m[1]); }],
        [/^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, function (m, t) { return t(m[1]) + ' ' + m[2]; }],
        [/^(\d+(?:\.\d+)?) months?$/, function (m) { return m[1] + (m[1] === '1' ? ' mes' : ' meses'); }],
        [/^Delete (.+)\?$/, function (m, t) { return '¿Eliminar ' + t(m[1]) + '?'; }],
        [/^(\d+) transactions?$/, function (m) { return m[1] + (m[1] === '1' ? ' movimiento' : ' movimientos'); }],
        [/^(\d+) years?$/, function (m) { return m[1] + (m[1] === '1' ? ' año' : ' años'); }],
        [/^(\d+) months?$/, function (m) { return m[1] + (m[1] === '1' ? ' mes' : ' meses'); }],
        [/^(.+) (\d+ años?|\d+ meses?|\d+ months?|\d+ years?) and (.+)$/, function (m, t) { return t(m[1] + ' ' + m[2]) + ' y ' + t(m[3]); }],
        [/^(\d+) years? and (\d+) months?$/, function (m) { return m[1] + (m[1] === '1' ? ' año' : ' años') + ' y ' + m[2] + (m[2] === '1' ? ' mes' : ' meses'); }],
        [/^(\d+)m ago$/, function (m) { return 'hace ' + m[1] + ' min'; }],
        [/^(\d+)h ago$/, function (m) { return 'hace ' + m[1] + ' h'; }],
        [/^(\d+)d ago$/, function (m) { return 'hace ' + m[1] + ' d'; }],
        [/^(.+) is over by (.+)\.$/, function (m) { return m[1] + ' se pasó por ' + m[2] + '.'; }],
        [/^(.+) is at -(.+)\.$/, function (m) { return m[1] + ' está en -' + m[2] + '.'; }],
        [/^(.+) has (.+) available\.$/, function (m) { return m[1] + ' tiene ' + m[2] + ' disponibles.'; }],
        [/^(.+) is fully funded\. Mark it complete\.$/, function (m) { return m[1] + ' está completa. Márcala como lograda.'; }],
        [/^(.+) is (.+) short\.$/, function (m) { return 'A ' + m[1] + ' le faltan ' + m[2] + '.'; }],
        [/^(\d+)% complete this period$/, function (m) { return m[1] + '% completado en este período'; }],
        [/^(\$[\d,.]+) in backups$/, function (m) { return m[1] + ' en respaldos'; }],
        [/^(\d+) (debts?)$/, function (m) { return m[1] + (m[1] === '1' ? ' deuda' : ' deudas'); }],
        [/^(\d+)% of income$/, function (m) { return m[1] + '% del ingreso'; }],
        [/^(\d+) (debts?) · (\d+)% of income$/, function (m) { return m[1] + (m[1] === '1' ? ' deuda' : ' deudas') + ' · ' + m[3] + '% del ingreso'; }],
        [/^(\d+)% of income · (.+) in backups$/, function (m) { return m[1] + '% del ingreso · ' + m[2] + ' en respaldos'; }],
        [/^(\d+) active$/, function (m) { return m[1] + (m[1] === '1' ? ' activo' : ' activos'); }],
        [/^(\d+)% funded$/, function (m) { return m[1] + '% fondeado'; }],
        [/^(\d+) \/ (\d+) paid$/, function (m) { return m[1] + ' / ' + m[2] + ' pagados'; }],
        [/^of (.+)$/, function (m) { return 'de ' + m[1]; }],
        [/^of (.+) goes to bills$/, function (m) { return 'de ' + m[1] + ' se va en pagos'; }],
        [/^of (.+) lent$/, function (m) { return 'de ' + m[1] + ' prestados'; }],
        [/^(.+) paid$/, function (m) { return m[1] + ' pagado'; }],
        [/^(.+) monthly$/, function (m) { return m[1] + ' al mes'; }],
        [/^(.+) left$/, function (m) { return 'Quedan ' + m[1]; }],
        [/^(.+) to go$/, function (m) { return 'Faltan ' + m[1]; }],
        [/^(.+) remaining to hit your target\.$/, function (m) { return 'Faltan ' + m[1] + ' para llegar a tu meta.'; }],
        [/^Over by (.+)$/, function (m) { return 'Pasado por ' + m[1]; }],
        [/^Alert: Overspent by (.+)\. Cover this deficit to balance your cash flow\.$/, function (m) { return 'Alerta: te pasaste por ' + m[1] + '. Cubre este déficit para equilibrar tu flujo.'; }],
        [/^(\d+)% of (.+)$/, function (m) { return m[1] + '% de ' + m[2]; }],
        [/^Show more \((\d+)\)$/, function (m) { return 'Ver más (' + m[1] + ')'; }],
        [/^Show more \((\d+) remaining\)$/, function (m) { return 'Ver más (' + m[1] + ' restantes)'; }],
        [/^Show all (envelopes|goals) \((\d+)\)$/, function (m) { return 'Ver ' + (m[1] === 'envelopes' ? 'todos los sobres' : 'todas las metas') + ' (' + m[2] + ')'; }],
        [/^Total \((\d+)% of income\)$/, function (m) { return 'Total (' + m[1] + '% del ingreso)'; }],
        [/^Backup (.+)$/, function (m) { return 'Respaldo ' + m[1]; }],
        [/^Loan to (.+)$/, function (m) { return 'Préstamo a ' + m[1]; }],
        [/^Cobro de (.+)$/, function (m) { return 'Cobro de ' + m[1]; }],
        [/^To (.+)$/, function (m) { return 'A ' + m[1]; }],
        [/^Fund (.+)$/, function (m) { return 'Abonar a ' + m[1]; }],
        [/^Start: (.+)$/, function (m) { return 'Inicio: ' + m[1]; }],
        [/^Moved from envelope (.+)$/, function (m) { return 'Movido del sobre ' + m[1]; }],
        [/^From (.+)$/, function (m) { return 'Desde ' + m[1]; }],
        [/^Remaining (.+)$/, function (m) { return 'Pendiente ' + m[1]; }],
        [/^Available (.+)$/, function (m) { return 'Disponible ' + m[1]; }],
        [/^Updated (.+)$/, function (m) { return 'Actualizado ' + m[1]; }],
        [/^Not sent: (.+)$/, function (m, t) { return 'No enviado: ' + t(m[1]); }],
        [/^Server answered (\d+)$/, function (m) { return 'El servidor respondió ' + m[1]; }],
        [/^(\d+) waiting to send\. They go out when you have a connection\./, function (m) { return m[1] + ' en espera de envío. Salen cuando tengas conexión.'; }],
        [/^(\d+) could not be sent \(see Activity\)\.?$/, function (m) { return m[1] + ' no se pudieron enviar (mira Actividad).'; }],
        [/^(\d+) from your bank emails$/, function (m) { return m[1] + ' de tus correos del banco'; }],
        [/^(\d+) entries from your bank emails\.$/, function (m) { return m[1] + ' movimientos de tus correos del banco.'; }],
        [/^(\d+) emails? could not be matched to an account\. ?(.*)$/, function (m, t) { return m[1] + (m[1] === '1' ? ' correo no se pudo vincular' : ' correos no se pudieron vincular') + ' a una cuenta. ' + t(m[2]); }],
        [/^(.+) looks like a repeated charge\.$/, function (m) { return m[1] + ' parece un cobro repetido.'; }],
        [/^Could not register "(.*)"\. Check the account and amount\.$/, function (m) { return 'No se pudo registrar "' + m[1] + '". Revisa la cuenta y el monto.'; }],
        [/^Your sheet already has (\d+) records\. Keep them to continue where you left off, or start empty to erase them\.$/, function (m) { return 'Tu hoja ya tiene ' + m[1] + ' registros. Consérvalos para continuar donde te quedaste, o empieza de cero para borrarlos.'; }],
        [/^KODA is showing sample data and will not save changes\. ?(.*)$/, function (m, t) { return 'KODA muestra datos de ejemplo y no guardará cambios. ' + t(m[1]); }],
        [/^(.*) KODA will keep retrying\.$/, function (m, t) { return t(m[1]) + ' KODA seguirá intentando.'; }],
        [/^(.+) only has (.+) left$/, function (m) { return m[1] + ' solo tiene ' + m[2] + ' pendiente'; }],
        [/^(.+) only has (.+) remaining\.?$/, function (m) { return m[1] + ' solo tiene ' + m[2] + ' pendiente.'; }],
        [/^This payment is higher than the outstanding balance \((.+)\)\.$/, function (m) { return 'Este pago es mayor que el saldo pendiente (' + m[1] + ').'; }],
        [/^(.+) is already in the (list|template)\.$/, function (m) { return m[1] + ' ya está en ' + (m[2] === 'list' ? 'la lista' : 'la plantilla') + '.'; }],
        [/^The backup only has (.+)$/, function (m) { return 'El respaldo solo tiene ' + m[1]; }]
    ];

    // ---------- Motor ----------
    var SALTAR = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, SELECT: 0, CODE: 1 };
    var ATTRS = ['title', 'placeholder', 'aria-label', 'alt'];
    var cache = Object.create(null);

    function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

    function tr(texto) {
        if (!texto) return texto;
        var m = texto.match(/^(\s*)([\s\S]*?)(\s*)$/);
        var core = norm(m[2]);
        if (!core || !/[A-Za-z]{2}/.test(core)) return texto;
        var hit = cache[core];
        if (hit === undefined) { hit = traducir(core); cache[core] = hit; }
        return hit === core ? texto : m[1] + hit + m[3];
    }

    function traducir(core) {
        if (Object.prototype.hasOwnProperty.call(D, core)) return D[core];
        for (var i = 0; i < P.length; i++) {
            var r = P[i][0].exec(core);
            if (r) return P[i][1](r, function (x) { return tr(x); });
        }
        // Texto compuesto: "Texto: valor" o "Texto · Texto"
        if (core.indexOf(' · ') > 0) {
            var partes = core.split(' · '), cambio = false;
            var out = partes.map(function (p) { var t = traducir(p); if (t !== p) cambio = true; return t; });
            if (cambio) return out.join(' · ');
        }
        return core;
    }

    function esIcono(el) {
        return el && el.closest && el.closest('.material-symbols-outlined, .ms, [data-no-i18n]');
    }

    function nodoTexto(n) {
        var p = n.parentNode;
        if (!p || SALTAR[p.nodeName] === 1 || esIcono(p)) return;
        var v = n.nodeValue;
        if (!v || !/[A-Za-z]{2}/.test(v)) return;
        var t = tr(v);
        if (t !== v) n.nodeValue = t;
    }

    function atributos(el) {
        if (!el.getAttribute) return;
        if (el.nodeName === 'SCRIPT' || el.nodeName === 'STYLE') return;
        for (var i = 0; i < ATTRS.length; i++) {
            var v = el.getAttribute(ATTRS[i]);
            if (v) { var t = tr(v); if (t !== v) el.setAttribute(ATTRS[i], t); }
        }
    }

    function recorrer(raiz) {
        if (!raiz) return;
        if (raiz.nodeType === 3) { nodoTexto(raiz); return; }
        if (raiz.nodeType !== 1 && raiz.nodeType !== 9 && raiz.nodeType !== 11) return;
        if (raiz.nodeType === 1) { if (raiz.nodeName === 'SCRIPT' || raiz.nodeName === 'STYLE') return; atributos(raiz); }
        var w = document.createTreeWalker(raiz, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
        var n;
        while ((n = w.nextNode())) {
            if (n.nodeType === 3) nodoTexto(n); else atributos(n);
        }
    }

    var obs = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
            var m = muts[i];
            if (m.type === 'characterData') nodoTexto(m.target);
            else if (m.type === 'attributes') atributos(m.target);
            else for (var j = 0; j < m.addedNodes.length; j++) recorrer(m.addedNodes[j]);
        }
    });

    function iniciar() {
        document.documentElement.setAttribute('lang', 'es');
        recorrer(document.documentElement);
        if (document.title) document.title = tr(document.title);
        obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    }
    // Se activa de inmediato (antes de que se pinte la página) y se repite cuando termina de cargar
    iniciar();
    document.addEventListener('DOMContentLoaded', function () { recorrer(document.documentElement); if (document.title) document.title = tr(document.title); });

    // Mensajes nativos del navegador
    ['alert', 'confirm', 'prompt'].forEach(function (k) {
        var orig = window[k]; if (!orig) return;
        window[k] = function (a, b) { return orig.call(window, typeof a === 'string' ? tr(a) : a, b); };
    });

    window.kodaTraducir = tr;
})();
