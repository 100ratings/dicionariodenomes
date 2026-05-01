// Configuração Remota do Site
// Este arquivo simula o estado que viria de um servidor externo
const SiteConfig = {
    // URL de onde o site deve buscar o status (ON/OFF)
    // Para uso real, você pode hospedar um arquivo .json em um GitHub Pages ou servidor próprio
    statusUrl: "https://api.jsonbin.io/v3/b/65f1a2b3dc74654018b26e3a/latest", // Exemplo de URL fictícia
    
    // Função para verificar se as funções estão ativas
    async isEnabled() {
        try {
            // Tenta ler do localStorage primeiro (para controle via painel no mesmo domínio)
            const localStatus = localStorage.getItem('site_functions_enabled');
            if (localStatus !== null) {
                return localStatus === 'true';
            }
            
            // Fallback: Se não houver local, assume ON por padrão
            return true; 
        } catch (e) {
            return true; // Segurança: assume ON se falhar
        }
    }
};

window.SiteConfig = SiteConfig;
