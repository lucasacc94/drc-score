netlify/functions/incrementa-calcolo.js
  export default async (req, context) => {
  try {
    const calcoli = (await context.storage.get({ key: 'calcoli' })) || 0;
    const nuovo = calcoli + 1;
    await context.storage.put({ key: 'calcoli', value: nuovo });
    return new Response(JSON.stringify({ calcoli: nuovo }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Errore contatore' }), { status: 500 });
  }
};
