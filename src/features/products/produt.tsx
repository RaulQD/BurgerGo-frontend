// import { Classics } from '../components/Classics';
// import { Categories } from '../components/Categories';
// import { Hero } from '../components/Hero';

import {
    Code,
    AlertTriangle,
    Zap,
    RefreshCw,
    ChevronDown,
    ChevronRight,
    CheckCircle,
    XCircle,
} from 'lucide-react';
import { useState } from 'react';
export interface BusinessLogicStep {
    step: number;
    action: string;
    validation?: boolean;
    api?: boolean;
    processing?: boolean;
    trace?: boolean;
    notification?: boolean;
    loop?: boolean;
    optional?: boolean;
    async?: boolean;
    safe?: boolean;
    collection?: boolean;
}

export interface MainFlow {
    id: string;
    title: string;
    method: string;
    steps: BusinessLogicStep[];
    errorHandling: string;
}

export interface ValidationRule {
    name: string;
    method: string;
    purpose: string;
    failAction: string;
}

export interface Integration {
    provider: string;
    operations: string[];
}

export interface Overview {
    title: string;
    description: string;
    keyFeatures: string[];
}

export interface BusinessLogic {
    overview: Overview;
    mainFlows: MainFlow[];
    validations: ValidationRule[];
    integrations: Integration[];
}
export const HomePage = () => {
    const [activeTab, setActiveTab] = useState('logica');
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
        {}
    );

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const tabs = [
        {
            id: 'logica',
            label: 'Lógica de Negocio',
            icon: <Code className='w-4 h-4' />,
        },
        {
            id: 'problemas',
            label: ' Problemas Críticos',
            icon: <AlertTriangle className='w-4 h-4' />,
        },
        {
            id: 'mejoras',
            label: ' Mejoras Sugeridas',
            icon: <Zap className='w-4 h-4' />,
        },
        {
            id: 'ejemplos',
            label: 'Ejemplos de Uso',
            icon: <RefreshCw className='w-4 h-4' />,
        },
    ];

    const businessLogic = {
        create: {
            title: 'Crear Producto con SKUs',
            flow: [
                '🔍 Validar marca y categoría',
                '📋 Validar especificaciones',
                '🆕 Crear producto en VTEX',
                '📦 Crear SKUs asociados',
                '🖼️ Cargar imágenes',
                '🔗 Asociar especificaciones',
                '📄 Asociar ficha técnica',
            ],
            description:
                'Proceso completo de creación de productos con validaciones previas',
        },
        update: {
            title: 'Actualizar Producto Existente',
            flow: [
                '🔍 Validar existencia del producto',
                '✏️ Actualizar datos base',
                '🔄 Actualizar SKUs',
                '🗑️ Eliminar especificaciones antiguas',
                '🔗 Asociar nuevas especificaciones',
            ],
            description:
                'Actualización completa manteniendo integridad de datos',
        },
        bulk: {
            title: 'Procesamiento Masivo',
            flow: [
                '📊 Dividir en lotes (batch_size)',
                '⚡ Procesar en paralelo',
                '📈 Acumular resultados',
                '📧 Enviar notificación por email',
                '📝 Generar reporte final',
            ],
            description: 'Manejo eficiente de grandes volúmenes de productos',
        },
    };

    type Severity = 'critical' | 'high' | 'medium' | 'low';
    interface CriticalIssue {
        severity: Severity;
        title: string;
        description: string;
        impact: string;
        solution: string;
    }
    const criticalIssues: CriticalIssue[] = [
        {
            severity: 'critical',
            title: 'Código Duplicado Masivo',
            description:
                'Los métodos createProductWhitSku y updateProductWhitSku comparten ~80% del código',
            impact: 'Mantenimiento difícil, bugs duplicados, inconsistencias',
            solution: 'Extraer lógica común a métodos privados reutilizables',
        },
        {
            severity: 'critical',
            title: 'Métodos Extremadamente Largos',
            description:
                'createProductWhitSku tiene 200+ líneas, viola principio de responsabilidad única',
            impact: 'Difícil de testear, debuggear y mantener',
            solution: 'Dividir en métodos más pequeños y específicos',
        },
        {
            severity: 'high',
            title: 'Manejo de Errores Inconsistente',
            description:
                'Diferentes patrones de manejo de errores en cada método',
            impact: 'Experiencia de usuario inconsistente, debugging complejo',
            solution: 'Implementar estrategia unificada de manejo de errores',
        },
        {
            severity: 'medium',
            title: 'Falta de Tipado Explícito',
            description:
                'Muchos parámetros sin tipos específicos (any implícito)',
            impact: 'Errores en tiempo de ejecución, IDE sin autocompletado',
            solution: 'Agregar interfaces TypeScript para todos los parámetros',
        },
    ];

    const improvements = [
        {
            category: 'Arquitectura',
            items: [
                'Extraer validaciones a una clase ValidationService',
                'Crear ProductRepository para separar lógica de datos',
                'Implementar patrón Command para operaciones complejas',
                'Usar Builder pattern para construcción de productos',
            ],
        },
        {
            category: 'Performance',
            items: [
                'Implementar cache para validaciones repetitivas',
                'Optimizar queries batch con Promise.allSettled',
                'Implementar retry con backoff exponencial',
                'Añadir timeouts configurables para API calls',
            ],
        },
        {
            category: 'Observabilidad',
            items: [
                'Métricas detalladas por operación',
                'Logs estructurados con contexto',
                'Health checks para dependencias externas',
                'Dashboards para monitoreo en tiempo real',
            ],
        },
    ];

    const codeExamples = {
        before: `// ❌ Código actual - Método muy largo y complejo
async createProductWhitSku(payload: createProductRequestDto) {
  // 200+ líneas de código mezclando validaciones, creación y manejo de errores
  try {
    await this.validateBrands({ brandId: payload.brandId });
    await this.validateCategory({ categoryId: payload.categoryId });
    // ... más validaciones
    const productCreated = await this.vtexProductProvider.create(productVtexData);
    // ... más lógica compleja
  } catch (error) {
    // manejo de errores
  }
}`,
        after: `// ✅ Código mejorado - Separación de responsabilidades
async createProductWhitSku(payload: CreateProductRequestDto): Promise<ProductCreationResult> {
  const validationResult = await this.validateProductCreation(payload);
  if (!validationResult.isValid) {
    throw new ValidationError(validationResult.errors);
  }

  const productData = this.productBuilder.buildFromRequest(payload);
  const product = await this.productRepository.create(productData);
  
  await this.processSkus(payload.skus, product.id);
  await this.processSpecifications(payload.specifications, product.id);
  
  return this.buildSuccessResponse(product);
}

private async validateProductCreation(payload: CreateProductRequestDto): Promise<ValidationResult> {
  return this.validationService.validateAll([
    () => this.validationService.validateBrand(payload.brandId),
    () => this.validationService.validateCategory(payload.categoryId),
    () => this.validationService.validateSpecifications(payload.specifications)
  ]);
}`,
    };

    const getSeverityColor = (
        severity: 'critical' | 'high' | 'medium' | 'low'
    ) => {
        const colors = {
            critical: 'bg-red-500',
            high: 'bg-orange-500',
            medium: 'bg-blue-500',
            low: 'bg-green-500',
        };
        return colors[severity] || 'bg-gray-500';
    };
    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center mb-8 border border-white/20'>
                    <h1 className='text-4xl font-bold text-white mb-4'>
                        🔍 Análisis ProductService
                    </h1>
                    <p className='text-white/90 text-lg'>
                        Revisión completa de lógica de negocio, arquitectura y
                        mejoras sugeridas
                    </p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
                    <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20'>
                        <div className='text-3xl font-bold text-white'>
                            800+
                        </div>
                        <div className='text-white/80'>Líneas de Código</div>
                    </div>
                    <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20'>
                        <div className='text-3xl font-bold text-white'>12</div>
                        <div className='text-white/80'>Métodos Públicos</div>
                    </div>
                    <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20'>
                        <div className='text-3xl font-bold text-white'>6</div>
                        <div className='text-white/80'>Dependencias VTEX</div>
                    </div>
                    <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20'>
                        <div className='text-3xl font-bold text-white'>80%</div>
                        <div className='text-white/80'>Código Duplicado</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex flex-wrap bg-white/10 backdrop-blur-lg rounded-2xl p-2 mb-6 border border-white/20'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                                activeTab === tab.id
                                    ? 'bg-white/20 text-white transform -translate-y-1 shadow-lg'
                                    : 'text-white/80 hover:bg-white/10'
                            }`}>
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
                    {/* Lógica de Negocio */}
                    {activeTab === 'logica' && (
                        <div className='p-8'>
                            <h2 className='text-3xl font-bold mb-6 text-gray-800'>
                                🏗️ Lógica de Negocio
                            </h2>

                            <div className='mb-8'>
                                <h3 className='text-xl font-semibold mb-4 text-gray-700'>
                                    Flujos Principales
                                </h3>
                                <div className='space-y-6'>
                                    {Object.entries(businessLogic).map(
                                        ([key, logic]) => (
                                            <div
                                                key={key}
                                                className='border border-gray-200 rounded-xl overflow-hidden'>
                                                <button
                                                    onClick={() =>
                                                        toggleSection(key)
                                                    }
                                                    className='w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors'>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='text-xl font-semibold text-gray-800'>
                                                            {logic.title}
                                                        </span>
                                                    </div>
                                                    {openSections[key] ? (
                                                        <ChevronDown className='w-5 h-5' />
                                                    ) : (
                                                        <ChevronRight className='w-5 h-5' />
                                                    )}
                                                </button>

                                                {openSections[key] && (
                                                    <div className='p-4 bg-white'>
                                                        <p className='text-gray-600 mb-4'>
                                                            {logic.description}
                                                        </p>
                                                        <div className='flex flex-wrap gap-3'>
                                                            {logic.flow.map(
                                                                (
                                                                    step,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className='flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium'>
                                                                        <span className='mr-2 bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs'>
                                                                            {index +
                                                                                1}
                                                                        </span>
                                                                        {step}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className='bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
                                <h4 className='font-semibold text-blue-800 mb-2'>
                                    💡 ¿Qué hace tu servicio?
                                </h4>
                                <p className='text-blue-700'>
                                    Tu ProductService es el corazón de un
                                    sistema de gestión de productos para VTEX.
                                    Maneja todo el ciclo de vida: desde la
                                    creación y validación hasta la actualización
                                    masiva. Integra múltiples proveedores
                                    (marcas, categorías, SKUs) y mantiene
                                    trazabilidad completa de operaciones.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Problemas Críticos */}
                    {activeTab === 'problemas' && (
                        <div className='p-8'>
                            <h2 className='text-3xl font-bold mb-6 text-gray-800'>
                                ⚠️ Problemas Críticos
                            </h2>

                            <div className='space-y-6'>
                                {criticalIssues.map((issue, index) => (
                                    <div
                                        key={index}
                                        className='border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg'>
                                        <div className='flex items-start gap-4'>
                                            <span
                                                className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getSeverityColor(
                                                    issue.severity
                                                )}`}>
                                                {issue.severity.toUpperCase()}
                                            </span>
                                            <div className='flex-1'>
                                                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                                                    {issue.title}
                                                </h3>
                                                <p className='text-gray-600 mb-3'>
                                                    {issue.description}
                                                </p>
                                                <div className='bg-white p-3 rounded-lg mb-3'>
                                                    <strong className='text-red-600'>
                                                        Impacto:
                                                    </strong>{' '}
                                                    {issue.impact}
                                                </div>
                                                <div className='bg-green-100 p-3 rounded-lg'>
                                                    <strong className='text-green-600'>
                                                        Solución:
                                                    </strong>{' '}
                                                    {issue.solution}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6'>
                                <h4 className='font-semibold text-yellow-800 mb-3'>
                                    🎯 Prioridades de Refactoring
                                </h4>
                                <ol className='list-decimal list-inside space-y-2 text-yellow-700'>
                                    <li>
                                        Extraer lógica común entre create/update
                                    </li>
                                    <li>
                                        Dividir métodos largos en funciones
                                        específicas
                                    </li>
                                    <li>Implementar validación centralizada</li>
                                    <li>Añadir tipos TypeScript explícitos</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {/* Mejoras Sugeridas */}
                    {activeTab === 'mejoras' && (
                        <div className='p-8'>
                            <h2 className='text-3xl font-bold mb-6 text-gray-800'>
                                ✨ Mejoras Sugeridas
                            </h2>

                            <div className='space-y-8'>
                                {improvements.map((category, index) => (
                                    <div
                                        key={index}
                                        className='bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200'>
                                        <h3 className='text-xl font-semibold mb-4 text-green-800'>
                                            {category.category}
                                        </h3>
                                        <div className='grid gap-3'>
                                            {category.items.map(
                                                (item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className='flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm'>
                                                        <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                                                        <span className='text-gray-700'>
                                                            {item}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6'>
                                <h4 className='font-semibold mb-3'>
                                    🚀 Beneficios Esperados
                                </h4>
                                <div className='grid md:grid-cols-2 gap-4'>
                                    <div>
                                        <h5 className='font-medium mb-2'>
                                            Mantenibilidad
                                        </h5>
                                        <ul className='text-sm text-white/90 space-y-1'>
                                            <li>
                                                • Código más limpio y legible
                                            </li>
                                            <li>
                                                • Fácil de testear unitariamente
                                            </li>
                                            <li>• Menos bugs en producción</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='font-medium mb-2'>
                                            Performance
                                        </h5>
                                        <ul className='text-sm text-white/90 space-y-1'>
                                            <li>
                                                • Procesamiento batch optimizado
                                            </li>
                                            <li>
                                                • Menor latencia en operaciones
                                            </li>
                                            <li>• Mejor manejo de memoria</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Ejemplos */}
                    {activeTab === 'ejemplos' && (
                        <div className='p-8'>
                            <h2 className='text-3xl font-bold mb-6 text-gray-800'>
                                📚 Ejemplos de Uso
                            </h2>

                            <div className='space-y-8'>
                                <div>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-700'>
                                        Código Antes vs Después
                                    </h3>

                                    <div className='grid md:grid-cols-2 gap-6'>
                                        <div>
                                            <h4 className='font-medium mb-3 text-red-600 flex items-center gap-2'>
                                                <XCircle className='w-5 h-5' />
                                                Código Actual (Problemático)
                                            </h4>
                                            <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto'>
                                                <code>
                                                    {codeExamples.before}
                                                </code>
                                            </pre>
                                        </div>

                                        <div>
                                            <h4 className='font-medium mb-3 text-green-600 flex items-center gap-2'>
                                                <CheckCircle className='w-5 h-5' />
                                                Código Mejorado
                                            </h4>
                                            <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto'>
                                                <code>
                                                    {codeExamples.after}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200'>
                                    <h4 className='font-semibold text-blue-800 mb-4'>
                                        🔍 Ejemplo de Uso Real
                                    </h4>
                                    <div className='bg-white p-4 rounded-lg'>
                                        <pre className='text-sm text-gray-700'>
                                            {`// Crear un producto con múltiples SKUs
const newProduct = {
  productId: "PROD-001",
  name: "Smartphone Galaxy",
  brandId: "SAMSUNG-ID",
  categoryId: "ELECTRONICS-ID",
  specifications: [
    { name: "Color", value: "Negro" },
    { name: "Memoria", value: "128GB" }
  ],
  skus: [
    {
      skuId: "SKU-001",
      name: "Galaxy Negro 128GB",
      images: [{ url: "https://...", fileName: "galaxy-black" }]
    }
  ],
  dataSheet: [
    { url: "https://...", fileName: "specs-galaxy" }
  ]
};

// El servicio maneja todo automáticamente:
// ✅ Valida marca y categoría
// ✅ Crea producto en VTEX  
// ✅ Crea SKUs asociados
// ✅ Sube imágenes
// ✅ Asocia especificaciones
// ✅ Genera trazabilidad completa`}
                                        </pre>
                                    </div>
                                </div>

                                <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-6'>
                                    <h4 className='font-semibold text-yellow-800 mb-3'>
                                        ⚡ Flujo de Procesamiento Masivo
                                    </h4>
                                    <div className='space-y-3'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                                                1
                                            </div>
                                            <span>
                                                Recibe array de productos (puede
                                                ser miles)
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                                                2
                                            </div>
                                            <span>
                                                Divide en lotes según
                                                config.batch_size
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                                                3
                                            </div>
                                            <span>
                                                Procesa cada lote en paralelo
                                                con Promise.allSettled
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                                                4
                                            </div>
                                            <span>
                                                Acumula éxitos y fallos por
                                                separado
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                                                5
                                            </div>
                                            <span>
                                                Envía email con reporte
                                                detallado al finalizar
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
