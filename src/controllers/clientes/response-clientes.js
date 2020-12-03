const responseCriandoCliente = (ctx, code, dados, deletado) => {
	if (deletado === true) {
		const status = 500;
		ctx.status = code;
		ctx.body = {
			status,
			menssagem: 'Este cliente esta deletdo',
		};
	} else {
		const status = 201;
		ctx.status = code;
		ctx.body = {
			status,
			dados: {
				id: dados,
				dados,
				deletado,
			},
		};
	}
};

const responseEditandoCliente = (ctx, code, dados) => {
	const status = code;
	ctx.status = code;
	ctx.body = {
		status,
		dados: {
			id: dados.cliente_id,
			nome: dados.cliente_nome,
			cpf: dados.cliente_cpf,
			email: dados.cliente_email,
		},
	};
};

const responseBuscandoCliente = (ctx, code, result, offset, totalPaginas) => {
	const status = code;
	ctx.status = code;
	if (result.length === 0) {
		ctx.body = {
			status,
			menssagem: 'Não existem resultados para esta pesquisa',
		};
	} else {
		ctx.body = {
			status,
			dados: {
				paginaAtual: parseFloat(offset),
				totalDePaginas: totalPaginas,
				clientes: result,
			},
		};
	}
};

const responseCamposNulos = (ctx, code, menssagem) => {
	const status = 400;
	ctx.status = code;
	ctx.body = {
		status,
		menssagem,
	};
};

module.exports = {
	responseCriandoCliente,
	responseEditandoCliente,
	responseBuscandoCliente,
	responseCamposNulos,
};