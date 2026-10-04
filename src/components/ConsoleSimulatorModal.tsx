import React, { useState } from 'react';
import { Terminal, X, Play, RotateCcw, Copy, Check, Database, Code2 } from 'lucide-react';

interface ConsoleSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsoleSimulatorModal: React.FC<ConsoleSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'sql' | 'python'>('terminal');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '====================================================',
    '       SATTVIK BHOJAN MANAGEMENT SYSTEM v1.0.2      ',
    '       Backend Console Application · Python + PG     ',
    '====================================================',
    '[*] Initializing connection pool to PostgreSQL...',
    '[*] Database "sattvik_db" connected via psycopg2.',
    '[*] Bcrypt security module loaded.',
    '',
    'Ready. Select a test command below to simulate CLI execution:'
  ]);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const runCommand = (cmd: string) => {
    let output: string[] = [];

    switch (cmd) {
      case '1':
        output = [
          '> 1. [AUTH] Authenticating Staff User "admin_staff"...',
          '[INFO] Fetching password_hash from users table: $2b$12$e8Y... (bcrypt)',
          '[SUCCESS] bcrypt.checkpw("AdminPass@2025", hash) -> True',
          '[SESSION] Authorized: Mehak (Role: ADMIN_OPERATIONS)',
          'Session Token initialized in memory.'
        ];
        break;
      case '2':
        output = [
          '> 2. [QUERY] Fetching Active Sattvik Menu Catalog...',
          'SELECT item_id, item_name, category, price, is_available FROM menu_items WHERE is_available = TRUE;',
          '+----+--------------------------+-------------+---------+-----------+',
          '| ID | Item Name                | Category    | Price   | Status    |',
          '+----+--------------------------+-------------+---------+-----------+',
          '| 1  | Sattvik Thali Special    | Main Course | 180.00  | AVAILABLE |',
          '| 2  | Dal Tadka (No Onion)     | Lentils     | 120.00  | AVAILABLE |',
          '| 3  | Paneer Butter Gravy      | Curries     | 160.00  | AVAILABLE |',
          '| 4  | Whole Wheat Phulka (x4)  | Breads      |  40.00  | AVAILABLE |',
          '| 5  | Fresh Mint Buttermilk    | Beverages   |  35.00  | AVAILABLE |',
          '+----+--------------------------+-------------+---------+-----------+',
          '[INFO] 5 active items retrieved in 14ms.'
        ];
        break;
      case '3':
        output = [
          '> 3. [ORDER] Creating Order #ORD-2026-089...',
          'BEGIN TRANSACTION;',
          'INSERT INTO orders (customer_id, total_amount, payment_status) VALUES (42, 360.00, "PAID") RETURNING order_id;',
          'INSERT INTO order_items (order_id, item_id, quantity, subtotal) VALUES',
          '  (89, 1, 2, 360.00);',
          'COMMIT;',
          '[SUCCESS] Order #89 persisted with status "PAID". Receipt printed to stdout.'
        ];
        break;
      case '4':
        output = [
          '> 4. [ANALYTICS] Running Daily Sales Reconciliation Query...',
          'SELECT COUNT(order_id) as orders_count, SUM(total_amount) as gross_revenue FROM orders WHERE DATE(order_timestamp) = CURRENT_DATE;',
          '+--------------+-----------------+------------------+-----------------+',
          '| Date         | Total Orders    | Gross Revenue    | Outstanding     |',
          '+--------------+-----------------+------------------+-----------------+',
          '| 2026-10-03   | 34 Orders       | ₹ 9,450.00       | ₹ 420.00        |',
          '+--------------+-----------------+------------------+-----------------+',
          '[INFO] Cash collected: ₹ 6,200 | UPI Digital: ₹ 2,830 | Pending: ₹ 420'
        ];
        break;
      case '5':
        output = [
          '> 5. [DB DDL] Viewing Normalized PostgreSQL Database Relations...',
          'public.users          (user_id, username, password_hash, role, created_at)',
          'public.customers      (customer_id, full_name, phone_number, address)',
          'public.menu_items     (item_id, item_name, category, price, is_available)',
          'public.orders         (order_id, customer_id, total_amount, payment_status, order_timestamp)',
          'public.order_items    (order_item_id, order_id, item_id, quantity, unit_price, subtotal)',
          'public.payments       (payment_id, order_id, method, amount_paid, paid_at)',
          '[INFO] Normalized 3NF structure with foreign key cascading constraints.'
        ];
        break;
      default:
        output = ['Unknown command. Select one of the presets below.'];
    }

    setTerminalHistory((prev) => [...prev, '', ...output]);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const pythonSnippet = `# sattvik_core.py - Python & PostgreSQL Integration
import psycopg2
import bcrypt
from datetime import datetime

class SattvikSystem:
    def __init__(self, db_config):
        self.conn = psycopg2.connect(**db_config)
        self.cursor = self.conn.cursor()

    def verify_credentials(self, username, plain_password):
        query = "SELECT password_hash, role FROM users WHERE username = %s"
        self.cursor.execute(query, (username,))
        result = self.cursor.fetchone()
        if not result:
            return False, None
        stored_hash, role = result
        if bcrypt.checkpw(plain_password.encode('utf-8'), stored_hash.encode('utf-8')):
            return True, role
        return False, None

    def create_order(self, customer_id, items, payment_status="PAID"):
        try:
            total = sum(item['price'] * item['qty'] for item in items)
            self.cursor.execute(
                "INSERT INTO orders (customer_id, total_amount, payment_status) VALUES (%s, %s, %s) RETURNING order_id",
                (customer_id, total, payment_status)
            )
            order_id = self.cursor.fetchone()[0]
            for item in items:
                self.cursor.execute(
                    "INSERT INTO order_items (order_id, item_id, quantity, subtotal) VALUES (%s, %s, %s, %s)",
                    (order_id, item['id'], item['qty'], item['price'] * item['qty'])
                )
            self.conn.commit()
            return order_id
        except Exception as e:
            self.conn.rollback()
            raise e`;

  const sqlSchemaSnippet = `-- Sattvik Bhojan Management System: Core Schema DDL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'STAFF',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    is_available BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id) ON DELETE RESTRICT,
    total_amount NUMERIC(10, 2) NOT NULL CHECK (total_amount >= 0),
    payment_status VARCHAR(20) DEFAULT 'PENDING' CHECK (payment_status IN ('PAID', 'PENDING', 'CANCELLED')),
    order_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    item_id INT REFERENCES menu_items(item_id),
    quantity INT NOT NULL CHECK (quantity > 0),
    subtotal NUMERIC(10, 2) NOT NULL
);`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-slate-950 rounded-xl shadow-2xl border border-slate-800 w-full max-w-4xl overflow-hidden my-8 text-slate-100 flex flex-col max-h-[85vh]">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <div className="h-4 w-px bg-slate-700 mx-1"></div>
            <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>sattvik_cli.py — Python & PostgreSQL Prototype Environment</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800 p-0.5 rounded text-xs font-mono">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'terminal' ? 'bg-teal-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                CLI Output
              </button>
              <button
                onClick={() => setActiveTab('python')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'python' ? 'bg-teal-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Python Code
              </button>
              <button
                onClick={() => setActiveTab('sql')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'sql' ? 'bg-teal-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                PostgreSQL Schema
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: Terminal Simulator */}
        {activeTab === 'terminal' && (
          <div className="flex-1 flex flex-col min-h-[420px]">
            {/* Command Trigger Bar */}
            <div className="bg-slate-900/60 p-3 border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 text-xs font-mono">Trigger Operations:</span>
              <button
                onClick={() => runCommand('1')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded border border-slate-700 font-mono transition-colors"
              >
                1. Test Bcrypt Auth
              </button>
              <button
                onClick={() => runCommand('2')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded border border-slate-700 font-mono transition-colors"
              >
                2. Fetch Menu Items (SQL)
              </button>
              <button
                onClick={() => runCommand('3')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded border border-slate-700 font-mono transition-colors"
              >
                3. Create Transaction Order
              </button>
              <button
                onClick={() => runCommand('4')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded border border-slate-700 font-mono transition-colors"
              >
                4. Sales Reconciliation
              </button>
              <button
                onClick={() => runCommand('5')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded border border-slate-700 font-mono transition-colors"
              >
                5. Schema Relations
              </button>
              <button
                onClick={() =>
                  setTerminalHistory([
                    '====================================================',
                    '       SATTVIK BHOJAN MANAGEMENT SYSTEM v1.0.2      ',
                    '       Backend Console Application · Python + PG     ',
                    '====================================================',
                    '[*] Cleared terminal history. Ready.'
                  ])
                }
                className="px-2 py-1 text-slate-400 hover:text-white rounded border border-slate-800 font-mono ml-auto inline-flex items-center gap-1"
                title="Reset Terminal Output"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Terminal Screen */}
            <div className="flex-1 p-5 overflow-y-auto font-mono text-xs text-slate-200 leading-relaxed bg-slate-950 space-y-1">
              {terminalHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.startsWith('[*]')
                      ? 'text-teal-400'
                      : line.startsWith('[SUCCESS]')
                      ? 'text-emerald-400'
                      : line.startsWith('>')
                      ? 'text-amber-300 font-bold'
                      : line.startsWith('SELECT') || line.startsWith('INSERT') || line.startsWith('BEGIN')
                      ? 'text-blue-300'
                      : 'text-slate-300'
                  }`}
                >
                  {line || '\u00A0'}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Python Code */}
        {activeTab === 'python' && (
          <div className="flex-1 p-5 overflow-y-auto bg-slate-950 font-mono text-xs relative">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
              <span className="text-slate-400">sattvik_core.py — Python Backend Logic & DB Driver</span>
              <button
                onClick={() => handleCopyCode(pythonSnippet)}
                className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
              {pythonSnippet}
            </pre>
          </div>
        )}

        {/* Tab 3: SQL Schema */}
        {activeTab === 'sql' && (
          <div className="flex-1 p-5 overflow-y-auto bg-slate-950 font-mono text-xs relative">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
              <span className="text-slate-400">schema_ddl.sql — PostgreSQL Normalized Schema (3NF)</span>
              <button
                onClick={() => handleCopyCode(sqlSchemaSnippet)}
                className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Schema'}</span>
              </button>
            </div>
            <pre className="text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre">
              {sqlSchemaSnippet}
            </pre>
          </div>
        )}

        {/* Scope disclaimer footer */}
        <div className="bg-slate-900 px-5 py-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong>Verified Scope:</strong> Python console program with psycopg2 & bcrypt. Not a web or cloud service.
          </span>
          <a
            href="https://github.com/Mehak1384/sattvik-bhojan-management-system"
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
          >
            Inspect GitHub Repository →
          </a>
        </div>
      </div>
    </div>
  );
};
