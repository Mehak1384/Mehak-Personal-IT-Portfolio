import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { Search, CheckCircle, Info, Layers, Filter } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = PORTFOLIO_DATA.skills;

  const filteredCategories = useMemo(() => {
    let result = categories;
    if (selectedCategory !== 'all') {
      result = result.filter((cat) => cat.id === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result
        .map((cat) => ({
          ...cat,
          skills: cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.proficiency.toLowerCase().includes(q) ||
              cat.title.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.skills.length > 0);
    }
    return result;
  }, [categories, selectedCategory, searchQuery]);

  // Color & label mapping for honest proficiency badges (clean unboxed text or minimal marker)
  const getProficiencyStyle = (prof: string) => {
    switch (prof) {
      case 'Working Knowledge':
        return 'text-teal-700 font-medium';
      case 'Practical':
        return 'text-blue-700 font-medium';
      case 'Fundamentals':
        return 'text-slate-600 font-normal';
      case 'Learning / Practical':
      case 'Currently Learning':
        return 'text-amber-700 font-normal';
      default:
        return 'text-slate-500 font-normal';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
              02. Technical Competencies
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Skills & Proficiencies
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Transparent, evidence-based skill evaluation with clear proficiency markers. No inflated "expert" claims.
            </p>
          </div>

          {/* Proficiency Legend (Unboxed, clean editorial) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-800">Proficiency Key:</span>
            <span className="inline-flex items-center gap-1 text-teal-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              Working Knowledge (Hands-on)
            </span>
            <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Practical
            </span>
            <span className="inline-flex items-center gap-1 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              Fundamentals
            </span>
            <span className="inline-flex items-center gap-1 text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Currently Learning
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-100">
          {/* Category Tabs (Segmented control buttons) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              All Categories ({categories.length})
            </button>
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
            {categories.length > 5 && (
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-2.5 py-1.5 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                aria-label="More categories"
              >
                <option value="all">More Categories...</option>
                {categories.slice(5).map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by skill name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-slate-50/60 rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4 line-clamp-1">
                  {category.description}
                </p>

                {/* Skills List without static pill badges - unboxed clean presentation */}
                <div className="divide-y divide-slate-200/60 border-t border-b border-slate-200/60 my-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-2 flex items-center justify-between gap-3 text-xs"
                    >
                      <span className={`text-slate-800 ${skill.highlight ? 'font-semibold' : ''}`}>
                        {skill.name}
                      </span>
                      <span className={`text-right shrink-0 ${getProficiencyStyle(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Domain: IT & CS Foundation</span>
                <span>Chitkara Curated</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <p className="text-sm text-slate-600">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-semibold text-teal-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
