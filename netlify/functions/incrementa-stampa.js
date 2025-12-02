 export default async (req, context) => {
  try {
    const stampe = (await context.storage.get({ key: 'stampe' })) || 0;
    const nuovo = stampe + 1;
    await context.storage.put({ key: 'stampe', value: nuovo });
    return new Response(JSON.stringify({ stampe: nuovo }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Errore contatore' }), { status: 500 });
  }
};
